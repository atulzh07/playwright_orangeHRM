const { test } = require("@playwright/test");

test("login to orangeHRM", async ({ browser, page }) => {
  const context = await browser.newContext();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.pause();
});
