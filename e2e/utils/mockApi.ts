import { expect, Page } from "@playwright/test";

type MockResponseData = Record<string, any>;
type Endpoint = string | RegExp;
type StatusCode = number;
type ContentType = string;

export const mockApiRequest = async (
  page: Page,
  endpoint: Endpoint,
  responseData: MockResponseData,
  statusCode: StatusCode,
  contentType: ContentType 
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
