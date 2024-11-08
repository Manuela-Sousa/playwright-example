# Ready to use Playwright project # 

This is a ready to use test automation playwright project to help you start.

## Organization of the project

#### This repository is organized into different folders:

* e2e - **env:**  in this folder we have the environments files. For each environment we should have a different file.
  
* e2e - **locators:** in this folder we have the locators file. All the web elements should be stored in this file.

* e2e - **pages:** in this folder we have the page objects. Each page object will have methods and properties that represent the page’s elements and actions.

* e2e - **tests - specs:** in this folder we have all the tests files.

#### Configuring test environment to be executed on the project

In the **playwright.config.ts** file in this code line  **process.env.ENV = process.env.ENV || 'local';** you specify the environment where you want to execute your tests. 

## Design Patterns used in this project and their explanation

### Page Object Pattern

**Page Object Pattern** is used to **improve** test automation **maintenance** and **reducing** code duplication and it is applied to this project in pages folder. The classes inside pages folder represent the locators for web elements of each different page from the website used for tests and their separation from tests that are in tests folder.  
The **custom Page Object Pattern** says that actions associate with **features** and with **page objects** should also be in this classes along with locators. Due to the **violation** of **Single Reponsability Principle** that states that classes can only have one reason to change, regarding the **SOLID principles** of object oriented programming language, in this project each group of actions associated with the features and with page objects, are in a in pages folder and locators are in the locators folder.

### To Run

You can execute the tests of this project from the Visual Studio code plugin or you can execute from the command line using:

**Run all the tests**

npx playwright test


**Run a single test file**

npx playwright test tests/todo-page.spec.ts


**Run a set of test files**

npx playwright test tests/todo-page/ tests/landing-page/


**Run files that have my-spec or my-spec-2 in the file name**

npx playwright test my-spec my-spec-2


**Run tests that are in line 42 in my-spec.ts**

npx playwright test my-spec.ts:42


**Run the test with the title**

npx playwright test -g "add a todo item"


**Run tests in headed browsers**

npx playwright test --headed


**Run all the tests against a specific project**

npx playwright test --project=chromium


**Disable parallelization**

npx playwright test --workers=1


**Choose a reporter**

npx playwright test --reporter=dot


**Run in debug mode with Playwright Inspector**

npx playwright test --debug


**Run tests in interactive UI mode, with a built-in watch mode (Preview)**

npx playwright test --ui
