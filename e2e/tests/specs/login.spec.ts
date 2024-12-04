import { test } from "../../fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test("Should see error messages when trying to login", async ({
  loginPage,
}) => {
  await loginPage.validateErrorLoginMessages();
});
