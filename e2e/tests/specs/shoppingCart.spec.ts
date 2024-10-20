import { test } from "../../fixtures";

test("should be able to see add book to cart", async ({
  page,
  bookListingPage,
}) => {
  await page.goto("/");
  await bookListingPage.addBookToCart(page);
});
