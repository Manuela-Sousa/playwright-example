import { test } from "../../fixtures";
import { locators } from "../../locators/locators";

test("Should be able to add and view book in the cart", async ({
  page,
  genericPage,
}) => {
  await page.goto("/");
  await genericPage.waitForElementVisible(locators.ADD_TO_CART_BUTTON);
  await genericPage.clickElement(locators.ADD_TO_CART_BUTTON);
  await genericPage.clickElement(locators.MINI_CART_BUTTON);
  await genericPage.waitForElementVisible(locators.BOOK_ADDED_TO_CART_IMAGE);
});
