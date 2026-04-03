import { test, expect } from "@playwright/test";

/**
 * Visibility tests — every page's key content must be visible.
 * Catches the "opacity-0 gating" bug where content is hidden
 * behind animation state and never appears.
 */

test.describe("Homepage — audience router visible", () => {
  test("all three audience cards visible", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    await expect(page.getByText("I Need Software Built")).toBeVisible();
    await expect(page.getByText("My Child Wants Real Skills")).toBeVisible();
    await expect(page.getByText("I Want to Partner")).toBeVisible();
    // Card CTAs exist as links
    await expect(page.locator('a[href="/for-clients"]').first()).toBeVisible();
    await expect(page.locator('a[href="/for-students"]').first()).toBeVisible();
    await expect(page.locator('a[href="/for-partners"]').first()).toBeVisible();
  });
});

test.describe("For Clients — all sections visible", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/for-clients");
    await page.waitForLoadState("networkidle");
  });

  test("hero and service cards visible", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("Websites & Web Apps").first()).toBeVisible();
    await expect(page.getByText("MVPs for Startups").first()).toBeVisible();
    await expect(page.getByText("Internal Tools").first()).toBeVisible();
    await expect(page.getByText("AI Integration").first()).toBeVisible();
  });

  test("proof section visible", async ({ page }) => {
    const proof = page.getByText("Coerver NW", { exact: true }).first();
    await proof.scrollIntoViewIfNeeded();
    await expect(proof).toBeVisible();
  });

  test("FAQ visible", async ({ page }) => {
    const faq = page.getByText("Will students work on my project").first();
    await faq.scrollIntoViewIfNeeded();
    await expect(faq).toBeVisible();
  });

  test("CTA visible", async ({ page }) => {
    const cta = page.getByRole("button", { name: "Send Message" });
    await cta.scrollIntoViewIfNeeded();
    await expect(cta).toBeVisible();
  });
});

test.describe("For Students — all sections visible", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/for-students");
    await page.waitForLoadState("networkidle");
  });

  test("hero and learning sections visible", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("Colin Li").first()).toBeVisible();
  });

  test("tuition visible", async ({ page }) => {
    const tuition = page.getByText("$3,000").first();
    await tuition.scrollIntoViewIfNeeded();
    await expect(tuition).toBeVisible();
  });

  test("student section visible", async ({ page }) => {
    const studentSection = page.getByText("Apply Now").first();
    await studentSection.scrollIntoViewIfNeeded();
    await expect(studentSection).toBeVisible();
  });
});

test.describe("For Partners — all sections visible", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/for-partners");
    await page.waitForLoadState("networkidle");
  });

  test("hero and partnership cards visible", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("MVP Development").first()).toBeVisible();
    await expect(page.getByText("Talent Pipeline").first()).toBeVisible();
    await expect(page.getByText("Campus Programs").first()).toBeVisible();
  });

  test("CTA visible", async ({ page }) => {
    const cta = page.getByRole("button", { name: "Send Message" });
    await cta.scrollIntoViewIfNeeded();
    await expect(cta).toBeVisible();
  });
});
