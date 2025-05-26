import { Locator, Page } from "playwright-core";
import { expect } from "@playwright/test";

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getLocator(selector: string | Locator): Locator {
    return typeof selector === "string" ? this.page.locator(selector) : selector;
  }

  async waitForElementVisible(
    selector: string | Locator,
    timeout = 5000
  ): Promise<void> {
    const locator = this.getLocator(selector);
    await locator.waitFor({ state: "visible", timeout });
    await expect(locator).toBeVisible({ timeout });
  }

  async clickElement(selector: string | Locator): Promise<void> {
    const locator = this.getLocator(selector);
    await this.waitForElementVisible(locator);
    await locator.click();
  }
  async sendKeys(selector: string | Locator, text: string): Promise<void> {
    await this.getLocator(selector).fill(text);
  }

  async findSpecificElementByText(
    selector: string,
    text: string
  ): Promise<Locator> {
    const elements = await this.page.locator(selector).all();
    for (const element of elements) {
      const elementText = await element.innerText();
      if (elementText.includes(text)) {
        return element;
      }
    }
    throw new Error(`Element with text "${text}" not found`);
  }
}