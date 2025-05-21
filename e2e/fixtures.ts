import { test as base } from "@playwright/test";
import BasePage from "./pages/BasePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Homepage from "./pages/homePage";
import LoginPage from "./pages/loginPage";

type MyFixtures = {
  basePage: BasePage;
  shoppingCartPage: ShoppingCartPage;
  homePage: Homepage;
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new Homepage(page));
  },
  shoppingCartPage: async ({ page }, use) => {
    await use(new ShoppingCartPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from "@playwright/test";
