class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://qa.axiompro.biz/';
    
    this.selectors = {
      axiomLogo: 'text="AXIOM"',
      pleaseSignIn: 'text="Please sign in"',
      emailInput: 'input[type="text"]',
      passwordInput: 'input[type="password"]',
      keepLoggedInCheckbox: 'input[type="checkbox"]',
      signInButton: 'button[type="submit"]',
      dontHaveAccount: 'text="Don\'t have an account?"',
      signUpLink: 'a:has-text("Sign Up")',
      copyrightNotice: 'text="Copyright © 2022. All Rights Reserved ®"'
    };
  }

  async navigate() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(1000);
  }

  async isLogoVisible() {
    return await this.page.locator(this.selectors.axiomLogo).isVisible();
  }

  async isPleaseSignInVisible() {
    return await this.page.locator(this.selectors.pleaseSignIn).isVisible();
  }

  async isEmailInputVisible() {
    return await this.page.locator(this.selectors.emailInput).isVisible();
  }

  async isPasswordInputVisible() {
    return await this.page.locator(this.selectors.passwordInput).isVisible();
  }

  async isSignInButtonVisible() {
    return await this.page.locator(this.selectors.signInButton).isVisible();
  }

  async isSignUpLinkVisible() {
    return await this.page.locator(this.selectors.signUpLink).isVisible();
  }

  async isCopyrightVisible() {
    return await this.page.locator(this.selectors.copyrightNotice).isVisible();
  }

  async fillEmail(email) {
    await this.page.type(this.selectors.emailInput, email, { delay: 100 });
  }

  async fillPassword(password) {
    await this.page.type(this.selectors.passwordInput, password, { delay: 100 });
  }

  async clickSignIn() {
    await this.page.click(this.selectors.signInButton);
  }

  async clickSignUp() {
    await this.page.click(this.selectors.signUpLink);
  }

  async login(email, password) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignIn();
    await this.page.waitForLoadState('networkidle');
  }

  async isForgotPasswordLinkPresent() {
    const count = await this.page.locator('a:has-text("Forgot"), a:has-text("Reset")').count();
    return count > 0;
  }

  async isCaptchaPresent() {
    const count = await this.page.locator('iframe[src*="recaptcha"], .g-recaptcha').count();
    return count > 0;
  }

  async getCopyrightText() {
    return await this.page.locator(this.selectors.copyrightNotice).textContent();
  }
}

module.exports = LoginPage;
