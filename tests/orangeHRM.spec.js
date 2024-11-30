const { test } = require("@playwright/test");
import { loginPage } from "./selectors";

test("login to orangeHRM", async ({ browser, page }) => {
  const context = await browser.newContext();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator(loginPage.userName).fill();
  await page.locator(loginPage.password).fill();
  await page.locator(loginPage.loginButton).click();
  await page.pause();
});
