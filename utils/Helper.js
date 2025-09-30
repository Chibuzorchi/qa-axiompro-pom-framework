class Helper {
  static async takeScreenshot(page, name) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `screenshots/${name}-${timestamp}.png`;
    await page.screenshot({ path: filename, fullPage: true });
    return filename;
  }

  static async setUserAgent(page) {
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    });
  }

  static async waitForPageLoad(page) {
    await page.waitForLoadState('networkidle');
  }

  static async delay(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  static getCurrentTimestamp() {
    return new Date().toISOString();
  }

  static async logTestStep(step) {
    console.log(`[${this.getCurrentTimestamp()}] ${step}`);
  }
}

module.exports = Helper;
