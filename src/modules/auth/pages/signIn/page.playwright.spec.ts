import { test, expect } from "@playwright/test";

test("sign has title", async ({ page }) => {
  await page.goto("/auth/sign-in");
  await expect(page).toHaveTitle("Welcome to LMS");
});
