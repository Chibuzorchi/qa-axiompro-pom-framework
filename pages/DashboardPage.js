class DashboardPage {
  constructor(page) {
    this.page = page;
    
    this.selectors = {
      axiomLogo: 'text="AXIOM"',
      helloQA: 'text="Hello, QA!"',
      logoutButton: 'button:has-text("Log out")',
      copyrightNotice: 'text="Copyright © 2022. All Rights Reserved ®"',
      navigationMenu: 'nav, .navbar, .menu',
      userProfile: '.user-profile, .profile, [class*="user"]',
      dashboardContent: '.dashboard, .main-content, .content'
    };
  }

  async isLogoVisible() {
    return await this.page.locator(this.selectors.axiomLogo).isVisible();
  }

  async isHelloQAVisible() {
    return await this.page.locator(this.selectors.helloQA).isVisible();
  }

  async isLogoutButtonVisible() {
    return await this.page.locator(this.selectors.logoutButton).isVisible();
  }

  async isCopyrightVisible() {
    return await this.page.locator(this.selectors.copyrightNotice).isVisible();
  }

  async clickLogout() {
    await this.page.click(this.selectors.logoutButton);
    await this.page.waitForLoadState('networkidle');
  }

  async isNavigationMenuPresent() {
    const count = await this.page.locator(this.selectors.navigationMenu).count();
    return count > 0;
  }

  async isUserProfilePresent() {
    const count = await this.page.locator(this.selectors.userProfile).count();
    return count > 0;
  }

  async isDashboardContentPresent() {
    const count = await this.page.locator(this.selectors.dashboardContent).count();
    return count > 0;
  }

  async getCopyrightText() {
    return await this.page.locator(this.selectors.copyrightNotice).textContent();
  }

  async isOnDashboard() {
    const url = this.page.url();
    return url.includes('index.php');
  }
}

module.exports = DashboardPage;
