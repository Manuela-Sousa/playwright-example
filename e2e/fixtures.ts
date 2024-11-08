import { test as base } from "@playwright/test";
import genericPage from "./pages/GenericPage";

type MyFixtures = {
  genericPage: genericPage;
};

export const test = base.extend<MyFixtures>({
  genericPage: async ({ page }, use) => {
    await use(new genericPage(page));
  },
});
export { expect } from "@playwright/test";
