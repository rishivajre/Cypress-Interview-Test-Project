// Tags: @regression @smoke @sanity

describe('Swag Labs Login Tests', () => {
  const baseUrl = 'https://www.saucedemo.com/';
  const testUsers = [
    { username: 'standard_user', password: 'secret_sauce' },
    // You can add more users like:
    // { username: 'problem_user', password: 'secret_sauce' },
    // { username: 'performance_glitch_user', password: 'secret_sauce' }
  ];

  // 🧪 Regression & Smoke Tests
  testUsers.forEach((user) => {
    it(`should login successfully with valid credentials for ${user.username} @regression @smoke`, () => {
      cy.visit(baseUrl);
      cy.get('[data-test="username"]').type(user.username);
      cy.get('[data-test="password"]').type(user.password);
      cy.get('[data-test="login-button"]').click();

      // ✅ Assertion: Verify successful login
      cy.url().should('include', '/inventory.html');
      cy.get('.inventory_list').should('be.visible');
    });
  });

  // 🔍 Sanity Test
  it('should display login form elements @sanity', () => {
    cy.visit(baseUrl);
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible');
  });
});
