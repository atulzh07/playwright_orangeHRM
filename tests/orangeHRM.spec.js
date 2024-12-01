const { test } = require("@playwright/test");
import { loginPage } from "./selectors";
import { credentials } from "../.auth/auth.setup";

test("login to orangeHRM", async ({ browser, page }) => {
  const context = await browser.newContext();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator(loginPage.userName).fill(credentials.userName);
  await page.locator(loginPage.password).fill(credentials.password);
  await page.locator(loginPage.loginButton).click();
  await page.locator(
    "oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"
  );
  await page.pause();
});
