import { test as base } from "@playwright/test";
import bookListingPage from "./pages/bookListingPage";

type MyFixtures = {
  bookListingPage: bookListingPage;
};

export const test = base.extend<MyFixtures>({
  bookListingPage: async ({ page }, use) => {
    await use(new bookListingPage(page));
  },
});
export { expect } from "@playwright/test";
