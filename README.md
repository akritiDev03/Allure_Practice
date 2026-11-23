# Login Automation - Playwright + JavaScript + Allure

A small UI automation project for demonstrating JavaScript, Playwright Test, and Allure reporting.

## Prerequisites

- Node.js (LTS recommended)
- npm
- Java (required by the Allure command-line report tool)
- Internet access to reach the practice website

Playwright installs its own Chromium browser; a separate Chrome installation is not required.

## 1. Install dependencies

```bash
npm install
```

## 2. Install the Playwright browser

```bash
npx playwright install chromium
```

## 3. Run the tests

Run all tests in the terminal:

```bash
npm test
```

Run with a visible browser:

```bash
npm run test:headed
```

## 4. Generate and open the Allure report

After the tests finish, generate the report:

```bash
npm run report:generate
```

Open the generated report:

```bash
npm run report:open
```

Alternatively, use `npm run report:serve` to generate and serve a report from the raw results.

## Test cases

| ID | Test case | Expected result |
|---|---|---|
| TC001 | Login with valid credentials | User reaches Secure Area |
| TC002 | Login with invalid password | Invalid password message appears |
| TC003 | Verify login page title | Title is The Internet |
| TC004 | Verify login form elements | Username, password and Login button are visible |

## Concepts demonstrated

- JavaScript modules and async/await
- Playwright Test runner and `page` fixture
- `beforeEach` hook
- Locators (`locator`, `getByRole`)
- Assertions (`toBeVisible`, `toHaveTitle`, `toContainText`)
- Allure suites and steps
- Playwright configuration and Chromium project
- Failure artifacts: screenshots, video and trace configuration

## Notes

- The project uses the public practice site `https://the-internet.herokuapp.com/login`.
- The site is external and may occasionally be unavailable.
- Playwright automatically manages the `page` fixture, so no manual `page.close()` hook is needed.
- Allure command-line report generation requires a compatible Java installation.
