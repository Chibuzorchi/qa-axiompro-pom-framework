const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const TEST_DATA = require('../utils/TestData');
const Helper = require('../utils/Helper');

test.describe('Login Page Tests', () => {
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await Helper.setUserAgent(page);
  });

  test('should display all login page elements', async ({ page }) => {
    await Helper.logTestStep('Navigating to login page');
    await loginPage.navigate();
    
    await Helper.logTestStep('Verifying AXIOM logo is visible');
    expect(await loginPage.isLogoVisible()).toBeTruthy();
    
    await Helper.logTestStep('Verifying "Please sign in" text is visible');
    expect(await loginPage.isPleaseSignInVisible()).toBeTruthy();
    
    await Helper.logTestStep('Verifying email input is visible');
    expect(await loginPage.isEmailInputVisible()).toBeTruthy();
    
    await Helper.logTestStep('Verifying password input is visible');
    expect(await loginPage.isPasswordInputVisible()).toBeTruthy();
    
    await Helper.logTestStep('Verifying sign in button is visible');
    expect(await loginPage.isSignInButtonVisible()).toBeTruthy();
    
    await Helper.logTestStep('Verifying sign up link is visible');
    expect(await loginPage.isSignUpLinkVisible()).toBeTruthy();
    
    await Helper.logTestStep('Verifying copyright notice is visible');
    expect(await loginPage.isCopyrightVisible()).toBeTruthy();
  });

  test('should login with valid credentials', async ({ page }) => {
    await Helper.logTestStep('Navigating to login page');
    await loginPage.navigate();
    
    await Helper.logTestStep('Logging in with valid credentials');
    await loginPage.login(TEST_DATA.credentials.valid.email, TEST_DATA.credentials.valid.password);
    
    await Helper.logTestStep('Verifying redirect to dashboard');
    expect(await dashboardPage.isOnDashboard()).toBeTruthy();
    
    await Helper.logTestStep('Verifying "Hello, QA!" message is visible');
    expect(await dashboardPage.isHelloQAVisible()).toBeTruthy();
    
    await Helper.logTestStep('Verifying logout button is visible');
    expect(await dashboardPage.isLogoutButtonVisible()).toBeTruthy();
  });

  test('should logout successfully', async ({ page }) => {
    await Helper.logTestStep('Navigating to login page');
    await loginPage.navigate();
    
    await Helper.logTestStep('Logging in with valid credentials');
    await loginPage.login(TEST_DATA.credentials.valid.email, TEST_DATA.credentials.valid.password);
    
    await Helper.logTestStep('Clicking logout button');
    await dashboardPage.clickLogout();
    
    await Helper.logTestStep('Verifying return to login page');
    expect(await loginPage.isPleaseSignInVisible()).toBeTruthy();
  });

  test('should validate missing forgot password link', async ({ page }) => {
    await Helper.logTestStep('Navigating to login page');
    await loginPage.navigate();
    
    await Helper.logTestStep('Checking for missing forgot password link');
    expect(await loginPage.isForgotPasswordLinkPresent()).toBeFalsy();
  });

  test('should validate missing CAPTCHA', async ({ page }) => {
    await Helper.logTestStep('Navigating to login page');
    await loginPage.navigate();
    
    await Helper.logTestStep('Checking for missing CAPTCHA');
    expect(await loginPage.isCaptchaPresent()).toBeFalsy();
  });

  test('should validate outdated copyright year', async ({ page }) => {
    await Helper.logTestStep('Navigating to login page');
    await loginPage.navigate();
    
    await Helper.logTestStep('Checking copyright year');
    const copyrightText = await loginPage.getCopyrightText();
    expect(copyrightText).toContain('2022');
  });
});
