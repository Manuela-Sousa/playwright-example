import { test, expect } from "../../fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Should be able to add and view book in the cart", async ({ shoppingCartPage }) => {
  await shoppingCartPage.addBookToShoppingCart();
  expect(await shoppingCartPage.isBookInCart()).toBe(true);
});

test("Should be able to see the empty shopping cart", async ({ shoppingCartPage }) => {
  expect(await shoppingCartPage.validateEmptyShoppingCart()).toBe(true);
});