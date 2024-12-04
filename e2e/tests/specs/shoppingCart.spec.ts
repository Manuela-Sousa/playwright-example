import { test } from "../../fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test("Should be able to add and view book in the cart", async ({
  shoppingCartPage,
  homePage,
}) => {
  await homePage.addBookToShoppingCart();
  await shoppingCartPage.isBookInCart();
});

test("Should be able to see the empty shopping cart", async ({
  shoppingCartPage,
}) => {
  await shoppingCartPage.validateEmptyShoppingCart();
});
