const TEST_DATA = {
  credentials: {
    valid: {
      email: 'qa@gmail.com',
      password: 'Test2022!'
    },
    invalid: {
      email: 'invalid@test.com',
      password: 'wrongpassword'
    },
    empty: {
      email: '',
      password: ''
    }
  },
  
  urls: {
    login: 'https://qa.axiompro.biz/',
    dashboard: 'https://qa.axiompro.biz/index.php'
  },
  
  expectedTexts: {
    axiomLogo: 'AXIOM',
    pleaseSignIn: 'Please sign in',
    helloQA: 'Hello, QA!',
    signInButton: 'Sign in',
    logoutButton: 'Log out',
    signUpLink: 'Sign Up',
    dontHaveAccount: "Don't have an account?",
    copyright2022: 'Copyright © 2022. All Rights Reserved ®'
  },
  
  timeouts: {
    short: 1000,
    medium: 3000,
    long: 5000
  }
};

module.exports = TEST_DATA;
