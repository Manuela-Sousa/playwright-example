import { test as base } from "@playwright/test";
import BasePage from "./pages/BasePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ListingProductPage from "./pages/ListingProductPage";

type MyFixtures = {
  basePage: BasePage;
  shoppingCartPage: ShoppingCartPage;
  listingProductPage: ListingProductPage;
};

export const test = base.extend<MyFixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  listingProductPage: async ({ page }, use) => {
    await use(new ListingProductPage(page));
  },
  shoppingCartPage: async ({ page }, use) => {
    await use(new ShoppingCartPage(page));
  },
});

export { expect } from "@playwright/test";
