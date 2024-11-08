import { test } from "../../fixtures";

test("Should be able to add and view book in the cart", async ({ page, bookListingPage }) => {
  await page.goto("/");
  await bookListingPage.addBookToCart(page);
});
