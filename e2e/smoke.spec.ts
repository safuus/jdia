import { test, expect } from "@playwright/test";

test.describe("Smoke tests — all pages load", () => {
  test("homepage renders audience router", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Just Code It");
    await expect(page.getByText("I Need Software Built")).toBeVisible();
    await expect(page.getByText("My Child Wants Real Skills")).toBeVisible();
    await expect(page.getByText("I Want to Partner")).toBeVisible();
  });

  test("for-clients page renders", async ({ page }) => {
    await page.goto("/for-clients");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("Websites & Web Apps").first()).toBeVisible();
    await expect(page.getByRole("button", { name: "Send Message" })).toBeVisible();
  });

  test("for-students page renders", async ({ page }) => {
    await page.goto("/for-students");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("Colin Li").first()).toBeVisible();
    await expect(page.getByText("$3,000").first()).toBeVisible();
  });

  test("for-partners page renders", async ({ page }) => {
    await page.goto("/for-partners");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("MVP Development").first()).toBeVisible();
    await expect(page.getByText("Talent Pipeline").first()).toBeVisible();
  });

  test("services page renders", async ({ page }) => {
    await page.goto("/services");
    await expect(page.locator("h1")).toContainText("What we build");
  });

  test("about page renders", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("h1")).toContainText("Built by builders");
  });

  test("apply page renders", async ({ page }) => {
    await page.goto("/apply");
    await expect(page.locator("h1")).toContainText("Ready to build");
    await expect(page.getByRole("button", { name: "Submit Application" })).toBeVisible();
  });

  test("blog page renders", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.locator("h1")).toContainText("Ideas, updates");
  });

  test("blog post renders", async ({ page }) => {
    await page.goto("/blog/why-ai-native-education");
    await page.waitForTimeout(2000);
    await expect(page.locator("main")).toBeVisible();
  });

  test("homepage routes to landing pages", async ({ page }) => {
    await page.goto("/");
    await page.click('a[href="/for-clients"]');
    await expect(page).toHaveURL("/for-clients");

    await page.goto("/");
    await page.click('a[href="/for-students"]');
    await expect(page).toHaveURL("/for-students");

    await page.goto("/");
    await page.click('a[href="/for-partners"]');
    await expect(page).toHaveURL("/for-partners");
  });

  test("nav links work", async ({ page }) => {
    await page.goto("/");
    await page.click('nav a[href="/for-clients"]');
    await expect(page).toHaveURL("/for-clients");

    await page.click('nav a[href="/about"]');
    await expect(page).toHaveURL("/about");

    await page.click('nav a[href="/apply"]');
    await expect(page).toHaveURL("/apply");
  });
});
