import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "max@justcodeit.academy";
const DEPLOY_TEST_SECRET = process.env.DEPLOY_TEST_SECRET;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Basic health check (no secret needed)
  if (!secret) {
    return NextResponse.json({
      status: "ok",
      hasResendKey: !!RESEND_API_KEY,
      timestamp: new Date().toISOString(),
    });
  }

  // Full deploy smoke test (requires secret)
  if (!DEPLOY_TEST_SECRET || secret !== DEPLOY_TEST_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 403 });
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json({
      status: "fail",
      error: "RESEND_API_KEY not configured",
    }, { status: 500 });
  }

  const resend = new Resend(RESEND_API_KEY);
  const version = process.env.npm_package_version || "unknown";
  const commitSha = process.env.VERCEL_GIT_COMMIT_SHA?.substring(0, 7) || "unknown";
  const now = new Date().toISOString();

  try {
    const { error } = await resend.emails.send({
      from: "JCIA Deploy <hello@updates.justcodeit.academy>",
      to: CONTACT_EMAIL,
      subject: `[JCIA Deploy] Production deployed — ${commitSha} at ${now}`,
      text: [
        "Just Code It Academy — Deploy Smoke Test",
        "",
        `Commit:    ${commitSha}`,
        `Timestamp: ${now}`,
        `Node Env:  ${process.env.NODE_ENV}`,
        "",
        "This email confirms:",
        "  1. Vercel serverless functions are running",
        "  2. RESEND_API_KEY is configured and working",
        "  3. Email delivery from hello@updates.justcodeit.academy is functional",
        "",
        "If you received this, the deploy is healthy.",
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json({
        status: "fail",
        error: error.message || JSON.stringify(error),
      }, { status: 500 });
    }

    return NextResponse.json({
      status: "ok",
      email: "sent",
      to: CONTACT_EMAIL,
      commit: commitSha,
      timestamp: now,
    });
  } catch (err) {
    return NextResponse.json({
      status: "fail",
      error: err instanceof Error ? err.message : "Unknown error",
    }, { status: 500 });
  }
}
