import { Page } from "@playwright/test";

/**
 * Mocks an API request for the given endpoint.
 * @param page Playwright Page instance
 * @param endpoint Endpoint to intercept (string or RegExp)
 * @param responseData Data to return in the mocked response
 * @param statusCode HTTP status code (default: 200)
 * @param contentType Content-Type header (default: "application/json")
 */
export const mockApiRequest = async (
  page: Page,
  endpoint: string | RegExp,
  responseData: Record<string, any>,
  statusCode: number = 200,
  contentType: string = "application/json"
): Promise<void> => {
  await page.route(endpoint, async (route) => {
    await route.fulfill({
      body: JSON.stringify(responseData),
      status: statusCode,
      contentType,
    });
  }).catch((error) => {
    console.error("Error occurred while fulfilling the route:", error);
  });
};