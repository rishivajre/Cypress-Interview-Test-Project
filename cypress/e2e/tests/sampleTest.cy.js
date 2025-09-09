import LoginPage from '../pages/loginPage';

// Example of grouping and tagging using Mocha's describe/it and custom tags
// Example of parameterization using Cypress's it.each (via cypress-each or similar plugin)
// For parallel testing, use Cypress Dashboard or CI config (not in test file)

// Tags: @regression @smoke

describe('Login Test - Regression @regression', () => {
  const testUsers = [
    { username: 'testuser1', password: 'password123' },
    { username: 'testuser2', password: 'password456' }
  ];

  testUsers.forEach((user) => {
    it(`should login with valid credentials for ${user.username} @smoke`, () => {
      const login = new LoginPage();
      login.visit();
      login.enterUsername(user.username);
      login.enterPassword(user.password);
      login.submit();
      // Add assertions here
    });
  });
});

// Example: Sanity test group
// Tags: @sanity

describe('Login Page Sanity @sanity', () => {
  it('should display login form', () => {
    const login = new LoginPage();
    login.visit();
    cy.get('form').should('be.visible');
  });
});
