import { test as base, expect, Page } from "@playwright/test";
import BasePage from "./pages/BasePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";

type Fixtures = {
  basePage: BasePage;
  shoppingCartPage: ShoppingCartPage;
  homePage: HomePage;
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  shoppingCartPage: async ({ page }, use) => {
    await use(new ShoppingCartPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };