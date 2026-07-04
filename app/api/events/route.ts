import { engagementEventSchema } from "@/lib/events";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const result = engagementEventSchema.safeParse(body);
  if (!result.success) return new Response(null, { status: 400 });

  const webhookUrl = process.env.ANALYTICS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.ANALYTICS_WEBHOOK_SECRET
            ? { Authorization: `Bearer ${process.env.ANALYTICS_WEBHOOK_SECRET}` }
            : {}),
        },
        body: JSON.stringify({
          event: `engagement.${result.data.type}`,
          label: result.data.label,
          path: result.data.path,
          occurredAt: new Date().toISOString(),
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(4_000),
      });
    } catch (error) {
      console.error("Analytics webhook failed", error);
    }
  }

  return Response.json({ accepted: true }, { status: 202 });
}
