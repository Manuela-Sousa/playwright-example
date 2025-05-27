import { test, expect } from "../../fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Should be able to add and view book in the cart", async ({ shoppingCartPage }) => {
  await shoppingCartPage.addBookToShoppingCart();
  await shoppingCartPage.isBookInCart()
});

test("Should be able to see the empty shopping cart", async ({ shoppingCartPage }) => {
  await shoppingCartPage.validateEmptyShoppingCart()
}); 