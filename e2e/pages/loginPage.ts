import { Page } from "playwright-core";
import { locators } from "../locators/locators";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async fillUsername(username: string): Promise<void> {
    await this.fillField(locators.USERNAME_TEXTFIELD, username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.fillField(locators.PASSWORD_TEXTFIELD, password);
  }

  async submitLogin(): Promise<void> {
    await this.clickElement(locators.LOGIN_FORM_BUTTON);
  }

  async validateErrorLoginMessages(): Promise<void> {
    await this.submitLogin();

    await this.waitForElementVisible(locators.USERNAME_TEXTFIELD);
    await this.fillField(locators.USERNAME_TEXTFIELD, '');
    await this.fillField(locators.PASSWORD_TEXTFIELD, '');
    await this.waitForElementVisible(locators.USERNAME_ERROR_MESSAGE_TEXT);

    await this.findElementByText(locators.USERNAME_ERROR_MESSAGE_TEXT, "Username is required");
    await this.fillField(locators.USERNAME_TEXTFIELD, '');
    await this.waitForElementVisible(locators.PASSWORD_ERROR_MESSAGE_TEXT);
    await this.findElementByText(locators.PASSWORD_ERROR_MESSAGE_TEXT, "Password is required");
  }
}