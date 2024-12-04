import { test } from "../../fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test("Should see book in search results", async ({ listingProductPage }) => {
  await listingProductPage.searchBook();
});
