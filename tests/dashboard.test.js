const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const TEST_DATA = require('../utils/TestData');
const Helper = require('../utils/Helper');

test.describe('Dashboard Page Tests', () => {
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await Helper.setUserAgent(page);
    
    await Helper.logTestStep('Logging in to access dashboard');
    await loginPage.navigate();
    await loginPage.login(TEST_DATA.credentials.valid.email, TEST_DATA.credentials.valid.password);
  });

  test('should display all dashboard elements', async ({ page }) => {
    await Helper.logTestStep('Verifying AXIOM logo is visible on dashboard');
    expect(await dashboardPage.isLogoVisible()).toBeTruthy();
    
    await Helper.logTestStep('Verifying "Hello, QA!" message is visible');
    expect(await dashboardPage.isHelloQAVisible()).toBeTruthy();
    
    await Helper.logTestStep('Verifying logout button is visible');
    expect(await dashboardPage.isLogoutButtonVisible()).toBeTruthy();
    
    await Helper.logTestStep('Verifying copyright notice is visible');
    expect(await dashboardPage.isCopyrightVisible()).toBeTruthy();
  });

  test('should validate minimal dashboard content', async ({ page }) => {
    await Helper.logTestStep('Checking for missing navigation menu');
    expect(await dashboardPage.isNavigationMenuPresent()).toBeFalsy();
    
    await Helper.logTestStep('Checking for missing user profile');
    expect(await dashboardPage.isUserProfilePresent()).toBeFalsy();
    
    await Helper.logTestStep('Checking for missing dashboard content');
    expect(await dashboardPage.isDashboardContentPresent()).toBeFalsy();
  });

  test('should validate outdated copyright on dashboard', async ({ page }) => {
    await Helper.logTestStep('Checking copyright year on dashboard');
    const copyrightText = await dashboardPage.getCopyrightText();
    expect(copyrightText).toContain('2022');
  });

  test('should take dashboard screenshot', async ({ page }) => {
    await Helper.logTestStep('Taking dashboard screenshot');
    const screenshotPath = await Helper.takeScreenshot(page, 'dashboard');
    console.log(`Dashboard screenshot saved: ${screenshotPath}`);
  });
});
