import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

process.env.ENV = process.env.ENV || "local";
try {
  if (process.env.ENV) {
    dotenv.config({
      path: `./e2e/env/.env.${process.env.ENV}`,
      override: true,
    });
  }
} catch (error) {
  console.error("Error in loading environment variables", error);
}
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html", // You can combine multiple reporters
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: String(process.env.URL),
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    headless: true,
    trace: "on-first-retry",
    video: {
      mode: "on", // Set your desired mode
      size: { width: 640, height: 480 }, // Optional: Specify video size
    },
  },
  /* Configure projects for major browsers */
  projects: [
    /*  {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    }, */

    /* Test against mobile viewports. */
    /* {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },*/
    /* },*/

    /* Test against branded browsers. */
    /* {
      name: "Microsoft Edge",
      use: { ...devices["Desktop Edge"], channel: "msedge" },
    },*/
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
});
