const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await allure.suite('Authentication');

    await allure.step('Open the login page', async () => {
      await page.goto('/login');
    });
  });

  test('TC001 - Verify successful login with valid credentials', async ({ page }) => {
    await allure.step('Enter a valid username', async () => {
      await page.locator('#username').fill('tomsmith');
    });

    await allure.step('Enter a valid password', async () => {
      await page.locator('#password').fill('SuperSecretPassword!');
    });

    await allure.step('Click the Login button', async () => {
      await page.getByRole('button', { name: 'Login' }).click();
    });

    await allure.step('Verify that the success message is displayed', async () => {
      await expect(page.locator('#flash'))
        .toContainText('You logged into a secure area!');
    });

    await allure.step('Verify that the Secure Area heading is displayed', async () => {
      await expect(page.getByRole('heading', { name: 'Secure Area' }))
        .toBeVisible();
      // await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
    });
  });

  test('TC002 - Verify login fails with an invalid password', async ({ page }) => {
    await allure.step('Enter a valid username', async () => {
      await page.locator('#username').fill('tomsmith');
    });

    await allure.step('Enter an invalid password', async () => {
      await page.locator('#password').fill('WrongPassword123');
    });

    await allure.step('Click the Login button', async () => {
      await page.getByRole('button', { name: 'Login' }).click();
    });

    await allure.step('Verify that the error message is displayed', async () => {
      await expect(page.locator('#flash'))
        .toContainText('Your password is invalid!');
    });
  });

  test('TC003 - Verify login page title', async ({ page }) => {
    await allure.step('Verify page title', async () => {
      await expect(page).toHaveTitle('The Internet');
    });
  });

  test('TC004 - Verify username and password fields are visible', async ({ page }) => {
    await allure.step('Verify username field visibility', async () => {
      await expect(page.locator('#username')).toBeVisible();
    });

    await allure.step('Verify password field visibility', async () => {
      await expect(page.locator('#password')).toBeVisible();
    });

    await allure.step('Verify Login button visibility', async () => {
      await expect(page.getByRole('button', { name: 'Login' }))
        .toBeVisible();
    });
  });
});
