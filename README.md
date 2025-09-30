# QA AxiomPro Automation Framework

A comprehensive Page Object Model (POM) automation framework for testing qa.axiompro.biz website using Playwright.

## 🏗️ Framework Structure

```
qa-axiompro-automation/
├── pages/                 # Page Object Model classes
│   ├── LoginPage.js      # Login page interactions
│   └── DashboardPage.js  # Dashboard page interactions
├── tests/                # Test suites
│   ├── login.test.js     # Login page tests
│   └── dashboard.test.js # Dashboard page tests
├── utils/                # Utility classes
│   ├── TestData.js       # Test data and constants
│   └── Helper.js         # Helper functions
├── screenshots/          # Test screenshots
├── package.json          # Dependencies and scripts
├── playwright.config.js  # Playwright configuration
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation
```bash
# Install dependencies
npm install

# Install Playwright browsers
npm run install:browsers
```

### Running Tests

#### Run All Tests
```bash
npm test
```

#### Run Specific Test Suites
```bash
# Login page tests only
npm run test:login

# Dashboard page tests only
npm run test:dashboard
```

#### Run with UI
```bash
# Interactive test runner
npm run test:ui

# Run tests in headed mode
npm run test:headed

# Debug mode
npm run test:debug
```

#### Generate Test Report
```bash
npm run test:report
```

## 📋 Test Coverage

### Login Page Tests
- ✅ All UI elements visibility
- ✅ Valid login functionality
- ✅ Logout functionality
- ✅ Missing "Forgot Password" link validation
- ✅ Missing CAPTCHA validation
- ✅ Outdated copyright year validation

### Dashboard Page Tests
- ✅ All dashboard elements visibility
- ✅ Minimal content validation (bug confirmation)
- ✅ Missing navigation menu validation
- ✅ Missing user profile validation
- ✅ Screenshot capture

## 🔧 Page Object Model

### LoginPage Class
```javascript
const loginPage = new LoginPage(page);
await loginPage.navigate();
await loginPage.login('email@test.com', 'password');
await loginPage.isLogoVisible();
```

### DashboardPage Class
```javascript
const dashboardPage = new DashboardPage(page);
await dashboardPage.isHelloQAVisible();
await dashboardPage.clickLogout();
```

## 🛠️ Configuration

### Test Data
All test data is centralized in `utils/TestData.js`:
- Valid/invalid credentials
- URLs
- Expected text content
- Timeouts

### Helper Functions
Utility functions in `utils/Helper.js`:
- Screenshot capture
- User agent setting
- Page load waiting
- Test step logging

## 📊 Test Results

- **HTML Report**: `playwright-report/index.html`
- **JSON Results**: `test-results/results.json`
- **JUnit XML**: `test-results/results.xml`
- **Screenshots**: `screenshots/` directory

## 🐛 Bug Validation

This framework validates the following identified bugs:
- Missing "Forgot Password" functionality
- Missing CAPTCHA protection
- Outdated copyright year (2022)
- Minimal dashboard content
- Missing navigation menu
- Missing user profile

## 🔍 Debugging

### Debug Mode
```bash
npm run test:debug
```

### Trace Viewer
```bash
npx playwright show-trace test-results/trace.zip
```

## 📝 Adding New Tests

1. Create new page class in `pages/` directory
2. Add test methods to existing test files or create new ones
3. Update test data in `utils/TestData.js` if needed
4. Run tests to verify functionality

## 🤝 Contributing

1. Follow the existing code structure
2. Use descriptive test names
3. Add proper logging for test steps
4. Update documentation as needed

---

**Framework Version**: 1.0.0  
**Last Updated**: September 30, 2025
