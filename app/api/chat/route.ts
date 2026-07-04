import { GoogleGenAI } from "@google/genai";
import { chatRequestSchema, getFallbackReply, productKnowledge } from "@/lib/chat";

export const runtime = "nodejs";

const requests = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = requests.get(ip);

  if (!current || current.resetAt <= now) {
    requests.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { message: "You’re sending messages too quickly. Please wait a moment." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const result = chatRequestSchema.safeParse(body);
  if (!result.success) {
    return Response.json(
      { message: result.error.issues[0]?.message ?? "Invalid chat message." },
      { status: 400 },
    );
  }

  const latestQuestion = [...result.data.messages].reverse().find((message) => message.role === "user")?.content;
  if (!latestQuestion) {
    return Response.json({ message: "Please send a question." }, { status: 400 });
  }

  if (!process.env.GEMINI_API_KEY) {
    return Response.json({ reply: getFallbackReply(latestQuestion), mode: "product-guide" });
  }

  try {
    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await client.models.generateContent({
      model: process.env.GEMINI_CHAT_MODEL ?? "gemini-2.5-flash-lite",
      contents: result.data.messages.map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{ text: message.content }],
      })),
      config: {
        systemInstruction: `You are the concise, friendly VisionAI product advisor on a landing page.
Answer in the same language as the visitor. Use only the confirmed product knowledge below.
Never invent specifications, price, availability, medical claims, or compatibility.
If information is unknown, say it has not been announced and suggest the newsletter or contact details.
Keep answers under 90 words and avoid markdown tables.\n\n${productKnowledge}`,
        maxOutputTokens: 350,
        temperature: 0.4,
      },
    });

    const reply = response.text?.trim();
    if (!reply) throw new Error("The model returned an empty response.");

    return Response.json({ reply, mode: "gemini" });
  } catch (error) {
    console.error("Gemini chatbot request failed", error);

    const apiError = error as { status?: number; code?: number; message?: string };
    const status = apiError.status ?? apiError.code;
    if (status === 429 || apiError.message?.includes("RESOURCE_EXHAUSTED")) {
      return Response.json(
        {
          message:
            "The free AI quota is temporarily exhausted. Please try again later.",
        },
        { status: 503 },
      );
    }

    if (status === 400 || status === 401 || status === 403) {
      return Response.json(
        { message: "The Gemini API key or model configuration is invalid." },
        { status: 503 },
      );
    }

    return Response.json(
      { message: "The AI advisor is temporarily unavailable. Please try again shortly." },
      { status: 502 },
    );
  }
}
