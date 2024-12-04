import { Page } from "playwright-core";
import { locators } from "../locators/locators";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async validateErrorLoginMessages(): Promise<void> {
    await this.clickElement(locators.LOGIN_BUTTON);
    await this.clickElement(locators.LOGIN_FORM_BUTTON);

    await this.clickElement(locators.USERNAME_TEXTFIELD);

    await this.clickElement(locators.PASSWORD_TEXTFIELD);
    await this.clickElement(locators.LOGIN_FORM_BUTTON);

    await this.waitForElementVisible(locators.USERNAME_ERROR_MESSAGE_TEXT);
    await this.waitForElementVisible(locators.PASSWORD_ERROR_MESSAGE_TEXT);

    await this.findSpecificElementByText(
      locators.USERNAME_ERROR_MESSAGE_TEXT,
      "Username is required"
    );
    await this.findSpecificElementByText(
      locators.PASSWORD_ERROR_MESSAGE_TEXT,
      "Password is required"
    );
  }
}
