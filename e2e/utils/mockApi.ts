import { expect } from "@playwright/test";
export const mockApiRequest = async (
  page,
  endpoint,
  responseData,
  statusCode,
  contentType
) => {
  await page.route(endpoint, async (route) => {
    await route.fulfill({
      body: JSON.stringify(responseData),
      status: statusCode,
      contentType: contentType,
    });
    expect(responseData).toEqual(responseData);
  });
};
