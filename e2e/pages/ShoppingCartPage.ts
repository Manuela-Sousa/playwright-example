import { Page } from "playwright-core";
import { locators } from "../locators/locators";
import BasePage from "./BasePage";

export default class ShoppingCartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async addBookToShoppingCart(): Promise<void> {
    await this.waitForElementVisible(locators.ADD_TO_CART_BUTTON);
    await this.clickElement(locators.ADD_TO_CART_BUTTON);
    await this.clickElement(locators.MINI_CART_BUTTON);
  }
  async isBookInCart(): Promise<void> {
    await this.waitForElementVisible(locators.BOOK_ADDED_TO_CART_IMAGE);
  }

  async validateEmptyShoppingCart(): Promise<void> {
    await this.clickElement(locators.MINI_CART_BUTTON);
    await this.waitForElementVisible(locators.EMPTY_CART_TEXT);
    await this.waitForElementVisible(locators.CONTINUE_SHOPPING_BUTTON);
  }
}
