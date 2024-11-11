import { expect, Page } from "@playwright/test";

interface MockApiRequest<T> {
  page: Page;
  endpoint: string | RegExp;
  responseData: T;
  statusCode?: number;
  contentType?: string;
}

export const mockApiRequest = async ({
  page,
  endpoint,
  responseData,
  statusCode = 200,
  contentType = "application/json",
}: MockApiRequest<any>) => {
  await page.route(endpoint, async (route) => {
    const query = {
      body: JSON.stringify(responseData),
      status: statusCode,
      contentType,
    };

    return await route
      .fulfill(query)
      .then((res: any) => {
        expect(res).toBeDefined();
        expect(res).toEqual(responseData);
      })
      .catch((error: Error) => {
        console.error(
          `Failed to mock the API request for endpoint: ${endpoint}`,
          error
        );
        throw error;
      });
  });
};
