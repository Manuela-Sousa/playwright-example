import { test } from "../../fixtures";

test("Should be able to add and view book in the cart", async ({
  page,
  shoppingCartPage,
}) => {
  await page.goto("/");
  await shoppingCartPage.addBookToShoppingCart();
});
