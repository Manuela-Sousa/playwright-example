# Playwright Test Automation Project

This is a ready-to-use test automation project built with **Playwright** to help you quickly get started with end-to-end testing.

## To install
Installing Playwright
Get started by installing Playwright using npm, yarn or pnpm. Alternatively you can also get started and run your tests using the VS Code Extension.

**npm init playwright@latest**

#### Run the install command and select the following to get started:

- Choose between TypeScript or JavaScript (default is TypeScript)
- Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
- Add a GitHub Actions workflow to easily run tests on CI
- Install Playwright browsers (default is true)

## Project Structure

This repository follows a modular folder structure to organize test-related files and improve maintainability:

- **`e2e/env/`**: Environment configuration files. Each environment (e.g., `local`, `staging`, `production`) should have its own file in this directory.
  
- **`e2e/locators/`**: Contains locator files. All web element locators for various pages of the application should be defined here.

- **`e2e/pages/`**: Contains Page Object classes. Each class represents a different page in the application, encapsulating the actions (methods).

- **`e2e/tests/specs/`**: Contains test specification files. Each file includes test cases that use the Page Object classes and locators defined in other directories.

- **`fixtures.ts`**: The fixtures are used to set up reusable pieces of code that can be shared across multiple test cases. 

## Setting Up the Test Environment

You can configure the test environment in the `playwright.config.ts` file. Specifically, in the following line:


**process.env.ENV = process.env.ENV || 'local';**

This sets the environment for running tests. You can change the value of `process.env.ENV` to point to a different environment (e.g., `staging`, `production`) as needed.
ts

## Design Patterns Used

### Page Object Pattern

The **Page Object Pattern** is used in this project to enhance maintainability and reduce code duplication in test scripts.

- **Page Object Classes**: The classes in the `e2e/pages/` directory represent the actions associated with each page of the application. This separation allows for better organization and easier maintenance of your tests.

- **Separation of Concerns**: To align with **SOLID principles** (specifically the **Single Responsibility Principle**), we avoid combining all actions within the same class as the locators. Instead, actions are grouped in the Page Object classes based on the related feature or page, and locators are stored separately in the `locators/` folder.

## Running Tests

You can run the tests either through Visual Studio Code or the command line. Below are some useful commands:

### Run All Tests
To run all the tests in the project:

- **`npx playwright test`**

### Run a single test file
To run a single test file:

- **`npx playwright test e2e/tests/shoppingCart.spec.ts`**
