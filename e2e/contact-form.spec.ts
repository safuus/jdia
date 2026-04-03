import { test, expect, type Page } from "@playwright/test";

async function fillAndSubmitContactForm(page: Page) {
  const cta = page.getByRole("button", { name: "Send Message" });
  await cta.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  await page.locator("#name").fill("Test User");
  await page.locator("#email").fill("test@example.com");
  await page.locator("#message").fill("This is a test message from Playwright.");
  await cta.click();
}

test.describe("Contact form", () => {
  test("shows audience selector when no defaultAudience", async ({ page }) => {
    // Services page still has the old CTA without defaultAudience
    await page.goto("/services");
    const contactSection = page.locator("#contact");
    await contactSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Audience selector should be visible
    await expect(contactSection.locator('button:has-text("Client")')).toBeVisible();
    await expect(contactSection.locator('button:has-text("Student")')).toBeVisible();
    await expect(contactSection.locator('button:has-text("Partner")')).toBeVisible();
  });

  test("hides audience selector with defaultAudience on for-clients", async ({ page }) => {
    await page.goto("/for-clients");
    const cta = page.getByRole("button", { name: "Send Message" });
    await cta.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Audience selector buttons should NOT be visible
    await expect(page.locator('button:has-text("Client")')).not.toBeVisible();
    await expect(page.locator('button:has-text("Partner")')).not.toBeVisible();

    // But form fields should be visible (client fields)
    await expect(page.locator("#name")).toBeVisible();
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#projectType")).toBeVisible();
  });

  test("shows validation on empty required fields", async ({ page }) => {
    await page.goto("/for-clients");
    const submitButton = page.getByRole("button", { name: "Send Message" });
    await submitButton.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await submitButton.click();

    const nameInput = page.locator("#name");
    const isInvalid = await nameInput.evaluate(
      (el) => !(el as HTMLInputElement).validity.valid
    );
    expect(isInvalid).toBe(true);
  });

  test("form submission shows success or graceful error", async ({ page }) => {
    await page.goto("/for-clients");
    await fillAndSubmitContactForm(page);

    // Wait for server action response — either success or graceful error
    // Without RESEND_API_KEY, we get the "Unable to send" error (not a 500)
    const result = page.getByText("Message sent!").or(page.getByText("Unable to send"));
    await expect(result).toBeVisible({ timeout: 10000 });
  });

  test("form with defaultAudience sends correct audience value", async ({ page }) => {
    await page.goto("/for-partners");
    const cta = page.getByRole("button", { name: "Send Message" });
    await cta.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Partner page should show orgName field (partner-specific)
    await expect(page.locator("#orgName")).toBeVisible();

    // Hidden audience input should be "partner"
    const audienceValue = await page.locator('input[name="audience"]').inputValue();
    expect(audienceValue).toBe("partner");
  });

  test("student application form renders all fields", async ({ page }) => {
    await page.goto("/apply");
    await page.waitForLoadState("networkidle");

    // All required fields present
    await expect(page.locator("#name")).toBeVisible();
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#gradeLevel")).toBeVisible();
    await expect(page.locator("#experience")).toBeVisible();
    await expect(page.locator("#interests")).toBeVisible();
    await expect(page.locator("#availability")).toBeVisible();
    await expect(page.getByRole("button", { name: "Submit Application" })).toBeVisible();

    // Contact fallback email is correct
    await expect(page.getByText("max@justcodeit.academy")).toBeVisible();
  });

  test("FAQ accordion expands and collapses on for-clients", async ({ page }) => {
    await page.goto("/for-clients");

    const faqQuestion = page.getByRole("button", { name: "Will students work on my project" });
    await faqQuestion.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    await expect(faqQuestion).toHaveAttribute("aria-expanded", "false");

    await faqQuestion.click({ force: true });
    await page.waitForTimeout(500);
    await expect(faqQuestion).toHaveAttribute("aria-expanded", "true");

    await faqQuestion.click({ force: true });
    await page.waitForTimeout(500);
    await expect(faqQuestion).toHaveAttribute("aria-expanded", "false");
  });
});
