import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

// Set default environment if not provided
process.env.ENV = process.env.ENV || "local";

// Load environment variables from the correct .env file
try {
  dotenv.config({
    path: `./e2e/env/.env.${process.env.ENV}`,
    override: true,
  });
} catch (error) {
  console.error("Error loading environment variables:", error);
}

// Fallback for baseURL if not set
const baseURL = process.env.BASE_URL || "http://localhost:3000";

/**
 * Playwright Test Configuration
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter: "html",
  use: {
    baseURL,
    headless: true,
    trace: "on-first-retry",
    video: {
      mode: "on",
      size: { width: 640, height: 480 },
    },
  },
  projects: [
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
    // Uncomment to enable more browsers
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
    // {
    //   name: "Microsoft Edge",
    //   use: { ...devices["Desktop Edge"], channel: "msedge" },
    // },
    // {
    //   name: "Mobile Chrome",
    //   use: { ...devices["Pixel 5"] },
    // },
    // {
    //   name: "Mobile Safari",
    //   use: { ...devices["iPhone 12"] },
    // },
  ],
});