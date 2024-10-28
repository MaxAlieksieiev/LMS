import { test, expect } from "@playwright/test";

test("sign has title", async ({ page }) => {
  await page.goto("http://localhost:5173/auth/sign-in");
  await expect(page).toHaveTitle("LMS");
  await expect(page).toHaveURL("http://localhost:5173/auth/sign-in");
});
