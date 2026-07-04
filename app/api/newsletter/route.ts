import { newsletterSchema } from "@/lib/newsletter";

export const runtime = "nodejs";

const requests = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
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
      { message: "Too many attempts. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const result = newsletterSchema.safeParse(body);
  if (!result.success) {
    return Response.json(
      { message: result.error.issues[0]?.message ?? "Invalid form data." },
      { status: 400 },
    );
  }

  // Filled honeypot fields are accepted silently so bots receive no useful signal.
  if (result.data.website) {
    return Response.json({ message: "Subscription received." });
  }

  const webhookUrl = process.env.MAKE_NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json(
      { message: "Newsletter service is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.MAKE_WEBHOOK_API_KEY
          ? { "x-make-apikey": process.env.MAKE_WEBHOOK_API_KEY }
          : {}),
      },
      body: JSON.stringify({
        event: "newsletter.subscribed",
        email: result.data.email.toLowerCase(),
        source: "visionai-landing-page",
        subscribedAt: new Date().toISOString(),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook returned ${webhookResponse.status}`);
    }

    return Response.json({ message: "You’re on the list. Welcome to VisionAI." });
  } catch (error) {
    console.error("Make newsletter webhook failed", error);
    return Response.json(
      { message: "We couldn’t save your email right now. Please try again." },
      { status: 502 },
    );
  }
}
