import { test as base } from "@playwright/test";
import BasePage from "./pages/BasePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

type MyFixtures = {
  basePage: BasePage;
  shoppingCartPage: ShoppingCartPage;
};

export const test = base.extend<MyFixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  shoppingCartPage: async ({ page }, use) => {
    await use(new ShoppingCartPage(page));
  },
});

export { expect } from "@playwright/test";
