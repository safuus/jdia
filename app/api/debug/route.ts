import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.RESEND_API_KEY;
  return NextResponse.json({
    hasKey: !!key,
    keyPrefix: key ? key.substring(0, 8) + "..." : "NOT SET",
    contactEmail: process.env.CONTACT_EMAIL || "default: max@justcodeit.academy",
    nodeEnv: process.env.NODE_ENV,
  });
}
