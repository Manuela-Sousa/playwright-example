import { Page } from "playwright-core";
import { locators } from "../locators/locators";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async addBookToShoppingCart(): Promise<void> {
    await this.waitForElementVisible(locators.ADD_TO_CART_BUTTON);
    await this.clickElement(locators.ADD_TO_CART_BUTTON);
    await this.clickElement(locators.MINI_CART_BUTTON);
  }

  async searchBook(): Promise<void> {
    await this.fillField(
      locators.SEARCH_TEXTFIELD,
      "Harry Potter and the Chamber of Secrets"
    );
    await this.waitForElementVisible(locators.BOOK_TITLE_TEXT);
    await this.clickElement(locators.BOOK_TITLE_TEXT);
    await this.findElementByText(
      locators.BOOK_RESULTS_TITLE_TEXT,
      "Harry Potter and the Chamber of Secrets"
    );
  }
}
