import { Page } from "playwright-core";
import { expect } from "@playwright/test";
import { locators } from "../locators/locators";

export default class BookListingPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addBookToCart(page: Page) {
    await expect(page.locator(locators.ADD_TO_CART_BUTTON)).toBeVisible();
  }
}
