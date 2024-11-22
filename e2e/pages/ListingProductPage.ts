import { Page } from "playwright-core";
import { locators } from "../locators/locators";
import BasePage from "./BasePage";

export default class ListingProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async addBookToShoppingCart(): Promise<void> {
    await this.waitForElementVisible(locators.ADD_TO_CART_BUTTON);
    await this.clickElement(locators.ADD_TO_CART_BUTTON);
    await this.clickElement(locators.MINI_CART_BUTTON);
  }
}
