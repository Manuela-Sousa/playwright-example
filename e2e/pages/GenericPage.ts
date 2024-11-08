import { Locator, Page } from "playwright-core";
import { expect } from "@playwright/test";

export default class GenericPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private getLocator(selector: string | Locator): Locator {
    if (typeof selector === "string") {
      return this.page.locator(selector);
    }
    return selector;
  }

  async waitForElementVisible(
    selector: string | Locator,
    timeout: number = 5000
  ): Promise<void> {
    const locator = this.getLocator(selector);

    await expect(locator).toBeVisible({ timeout });
  }

  async clickElement(selector: string | Locator): Promise<void> {
    const locator = this.getLocator(selector);
    await this.waitForElementVisible(locator);
    await locator.click();
  }
}
