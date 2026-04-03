import { test, expect } from "@playwright/test";

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
