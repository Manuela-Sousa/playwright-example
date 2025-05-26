import { test, expect } from "../../fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("deve adicionar e exibir livro no carrinho", async ({ shoppingCartPage }) => {
  await shoppingCartPage.addBookToShoppingCart();
  expect(await shoppingCartPage.isBookInCart()).toBe(true);
});

test("deve exibir carrinho vazio quando não há itens", async ({ shoppingCartPage }) => {
  expect(await shoppingCartPage.validateEmptyShoppingCart()).toBe(true);
});