import { test } from "../../fixtures";
import { expect } from "@playwright/test";
import { locators } from "../../locators/locators";
import { mockBookData } from "../../mocks/bookMock";
import { mockApiRequest } from "../../utils/mockApi";
import { API_ENDPOINTS } from "../../config/apiEndpoints";

test.beforeEach(async ({ page }) => {
  await mockApiRequest(
    page,
    API_ENDPOINTS.GET_BOOKS,
    mockBookData,
    200,
    "application/json"
  );
  await page.goto("/");
});

test("Validate book title displayed on the homepage", async ({ page }) => {
  await page.waitForSelector(locators.BOOK_TITLE_TEXT, { timeout: 10000 });
  await expect(page.locator(locators.BOOK_TITLE_TEXT)).toHaveText(
    "Harry Potter and the cats"
  );
});
