"use server";

import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "wa@codingmind.com";

function getResendClient(): Resend | null {
  if (!RESEND_API_KEY) return null;
  return new Resend(RESEND_API_KEY);
}

const MISSING_KEY_ERROR: FormState = {
  success: false,
  error: "Unable to send your message. Please email wa@codingmind.com directly.",
};

// ─── Types ───────────────────────────────────────────────────────────

export type FormState = {
  success: boolean;
  error?: string;
};

type AudienceType = "client" | "student" | "partner";

const VALID_AUDIENCES: AudienceType[] = ["client", "student", "partner"];
const MAX_FIELD_LENGTH = 2000;
const MAX_SHORT_FIELD = 200;

// ─── Validation ──────────────────────────────────────────────────────

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateRequired(fields: Record<string, string>): string | null {
  for (const [name, value] of Object.entries(fields)) {
    if (!value || value.trim() === "") {
      return `${name} is required`;
    }
  }
  return null;
}

/** Strip control characters and newlines to prevent email header injection */
function sanitize(value: string | null, maxLength: number = MAX_SHORT_FIELD): string {
  if (!value) return "";
  return value.replace(/[\r\n\x00-\x1f]/g, " ").trim().slice(0, maxLength);
}

// ─── Contact Form ────────────────────────────────────────────────────
//
// Data flow:
//   User fills form → Server Action validates → Resend sends notification
//   → Fire-and-forget auto-reply → Return success/error to client
//
//   INPUT ──▶ VALIDATION ──▶ SEND NOTIFICATION ──▶ AUTO-REPLY (async) ──▶ RESPONSE
//     │            │              │                      │                   │
//     ▼            ▼              ▼                      ▼                   ▼
//   [FormData]  [missing?]    [Resend error?]      [silent fail OK]     {success/error}
//              [bad email?]   [network timeout?]

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = sanitize(formData.get("name") as string);
  const email = sanitize(formData.get("email") as string);
  const audience = formData.get("audience") as string;
  const message = sanitize(formData.get("message") as string, MAX_FIELD_LENGTH);
  const projectType = formData.get("projectType") ? sanitize(formData.get("projectType") as string) : null;
  const timeline = formData.get("timeline") ? sanitize(formData.get("timeline") as string) : null;
  const orgName = formData.get("orgName") ? sanitize(formData.get("orgName") as string) : null;

  // Validate audience
  if (!VALID_AUDIENCES.includes(audience as AudienceType)) {
    return { success: false, error: "Invalid audience type" };
  }

  // Validate required fields
  const requiredError = validateRequired({ Name: name, Email: email, Message: message });
  if (requiredError) {
    return { success: false, error: requiredError };
  }

  if (!validateEmail(email)) {
    return { success: false, error: "Please enter a valid email address" };
  }

  // Build email body
  const audienceLabel =
    audience === "client" ? "Client" : audience === "partner" ? "Partner" : "General";

  let body = `Name: ${name}\nEmail: ${email}\nType: ${audienceLabel}\n\n${message}`;
  if (projectType) body += `\n\nProject Type: ${projectType}`;
  if (timeline) body += `\nTimeline: ${timeline}`;
  if (orgName) body += `\nOrganization: ${orgName}`;

  const resend = getResendClient();
  if (!resend) {
    console.error("RESEND_API_KEY not configured");
    return MISSING_KEY_ERROR;
  }

  try {
    // Send notification email
    const { error } = await resend.emails.send({
      from: "JCIA Website <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      subject: `[JCIA ${audienceLabel}] New inquiry from ${name}`,
      text: body,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "Unable to send your message. Please email wa@codingmind.com directly.",
      };
    }

    // Fire-and-forget auto-reply — don't await, don't block the user
    resend.emails
      .send({
        from: "Just Code It Academy <onboarding@resend.dev>",
        to: email,
        subject: "We got your message — Just Code It Academy",
        text: `Hi ${name},\n\nThanks for reaching out to Just Code It Academy! We received your message and will get back to you within 1-2 business days.\n\nIn the meantime, feel free to explore our website at justcodeit.academy.\n\nBest,\nThe Just Code It Academy Team\nRedmond, WA`,
      })
      .catch((err) => console.error("Auto-reply failed:", err));

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      success: false,
      error: "Unable to send your message. Please email wa@codingmind.com directly.",
    };
  }
}

// ─── Student Application ─────────────────────────────────────────────

export async function submitApplication(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = sanitize(formData.get("name") as string);
  const email = sanitize(formData.get("email") as string);
  const gradeLevel = sanitize(formData.get("gradeLevel") as string);
  const experience = sanitize(formData.get("experience") as string);
  const interests = sanitize(formData.get("interests") as string, MAX_FIELD_LENGTH);
  const availability = sanitize(formData.get("availability") as string);

  // Validate required fields
  const requiredError = validateRequired({
    Name: name,
    Email: email,
    "Grade level": gradeLevel,
    "Programming experience": experience,
  });
  if (requiredError) {
    return { success: false, error: requiredError };
  }

  if (!validateEmail(email)) {
    return { success: false, error: "Please enter a valid email address" };
  }

  const body = `Student Application\n\nName: ${name}\nEmail: ${email}\nGrade Level: ${gradeLevel}\nExperience: ${experience}\nInterests: ${interests || "Not specified"}\nAvailability: ${availability || "Not specified"}`;

  const resend = getResendClient();
  if (!resend) {
    console.error("RESEND_API_KEY not configured");
    return MISSING_KEY_ERROR;
  }

  try {
    const { error } = await resend.emails.send({
      from: "JCIA Website <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      subject: `[JCIA Application] ${name} — ${gradeLevel}`,
      text: body,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "Unable to submit your application. Please email wa@codingmind.com directly.",
      };
    }

    // Fire-and-forget auto-reply
    resend.emails
      .send({
        from: "Just Code It Academy <onboarding@resend.dev>",
        to: email,
        subject: "Application received — Just Code It Academy",
        text: `Hi ${name},\n\nWe received your application to Just Code It Academy! We'll review it and get back to you within 3-5 business days.\n\nIf you have any questions in the meantime, reply to this email or reach out at wa@codingmind.com.\n\nBest,\nThe Just Code It Academy Team\nRedmond, WA`,
      })
      .catch((err) => console.error("Auto-reply failed:", err));

    return { success: true };
  } catch (err) {
    console.error("Application form error:", err);
    return {
      success: false,
      error: "Unable to submit your application. Please email wa@codingmind.com directly.",
    };
  }
}
