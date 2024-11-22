import { test } from "../../fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test("Should be able to add and view book in the cart", async ({
  shoppingCartPage,
  listingProductPage,
}) => {
  await listingProductPage.addBookToShoppingCart();
  await shoppingCartPage.isBookInCart();
});
