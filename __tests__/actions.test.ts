import { describe, it, expect, vi, beforeEach } from "vitest";

// Set RESEND_API_KEY so the client initializes in tests
vi.stubEnv("RESEND_API_KEY", "re_test_key");

// Store mock send function
const mockSend = vi.fn();

// Mock Resend before importing actions
vi.mock("resend", () => {
  return {
    Resend: class MockResend {
      emails = { send: mockSend };
    },
  };
});

// Dynamically import to get the mocked version
const { submitContactForm, submitApplication } = await import("@/lib/actions");

function makeFormData(entries: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [k, v] of Object.entries(entries)) {
    fd.set(k, v);
  }
  return fd;
}

const initialState = { success: false };

describe("submitContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns error when required fields are missing", async () => {
    const fd = makeFormData({ name: "", email: "", message: "", audience: "client" });
    const result = await submitContactForm(initialState, fd);
    expect(result.success).toBe(false);
    expect(result.error).toContain("required");
  });

  it("returns error for invalid email", async () => {
    const fd = makeFormData({
      name: "Test User",
      email: "not-an-email",
      message: "Hello",
      audience: "client",
    });
    const result = await submitContactForm(initialState, fd);
    expect(result.success).toBe(false);
    expect(result.error).toContain("valid email");
  });

  it("returns success when Resend sends successfully", async () => {
    mockSend.mockResolvedValueOnce({ data: { id: "123" }, error: null });
    // Auto-reply (fire-and-forget — returns a Promise)
    mockSend.mockResolvedValueOnce({ data: { id: "456" }, error: null });

    const fd = makeFormData({
      name: "Test User",
      email: "test@example.com",
      message: "I need a website",
      audience: "client",
      projectType: "website",
      timeline: "3-4months",
    });
    const result = await submitContactForm(initialState, fd);
    expect(result.success).toBe(true);
    // First call is the notification, second is the auto-reply
    expect(mockSend).toHaveBeenCalled();
  });

  it("returns error with mailto fallback when Resend fails", async () => {
    mockSend.mockResolvedValueOnce({
      data: null,
      error: { message: "API error" },
    });

    const fd = makeFormData({
      name: "Test User",
      email: "test@example.com",
      message: "Hello",
      audience: "client",
    });
    const result = await submitContactForm(initialState, fd);
    expect(result.success).toBe(false);
    expect(result.error).toContain("max@justcodeit.academy");
  });

  it("returns error with mailto fallback on network exception", async () => {
    mockSend.mockRejectedValueOnce(new Error("Network timeout"));

    const fd = makeFormData({
      name: "Test User",
      email: "test@example.com",
      message: "Hello",
      audience: "client",
    });
    const result = await submitContactForm(initialState, fd);
    expect(result.success).toBe(false);
    expect(result.error).toContain("max@justcodeit.academy");
  });
});

describe("submitContactForm — missing API key regression", () => {
  it("returns friendly error instead of 500 when RESEND_API_KEY is missing", async () => {
    // Temporarily remove the API key
    const original = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;

    // Re-import to get fresh module with no key
    vi.resetModules();
    vi.stubEnv("RESEND_API_KEY", "");
    const fresh = await import("@/lib/actions");

    const fd = makeFormData({
      name: "Test User",
      email: "test@example.com",
      message: "Hello",
      audience: "client",
    });
    const result = await fresh.submitContactForm(initialState, fd);
    expect(result.success).toBe(false);
    expect(result.error).toContain("max@justcodeit.academy");

    // Restore
    process.env.RESEND_API_KEY = original;
  });
});

describe("submitApplication", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns error when required fields are missing", async () => {
    const fd = makeFormData({ name: "Test", email: "", gradeLevel: "", experience: "" });
    const result = await submitApplication(initialState, fd);
    expect(result.success).toBe(false);
    expect(result.error).toContain("required");
  });

  it("returns success on valid submission", async () => {
    mockSend.mockResolvedValueOnce({ data: { id: "789" }, error: null });
    mockSend.mockResolvedValueOnce({ data: { id: "012" }, error: null });

    const fd = makeFormData({
      name: "Student Name",
      email: "student@example.com",
      gradeLevel: "hs-senior",
      experience: "intermediate",
      interests: "Web development",
      availability: "after-school",
    });
    const result = await submitApplication(initialState, fd);
    expect(result.success).toBe(true);
  });

  it("returns error with mailto fallback when Resend fails", async () => {
    mockSend.mockResolvedValueOnce({
      data: null,
      error: { message: "Rate limited" },
    });

    const fd = makeFormData({
      name: "Student",
      email: "student@example.com",
      gradeLevel: "college-freshman",
      experience: "beginner",
    });
    const result = await submitApplication(initialState, fd);
    expect(result.success).toBe(false);
    expect(result.error).toContain("max@justcodeit.academy");
  });
});
