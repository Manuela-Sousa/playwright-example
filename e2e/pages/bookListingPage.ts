import { Page } from "playwright-core";
import { expect } from "@playwright/test";
import { locators } from "../locators/locators";

export default class bookListingPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addBookToCart(page: Page) {
    await expect(
      page.getByRole('button', { name: 'Book Cart' })).toBeVisible();
  }
}
