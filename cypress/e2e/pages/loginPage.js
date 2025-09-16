// Page Object for Login Page
class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/'); // just an example 
  }

  enterUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('form').submit();
  }
}

export default LoginPage;
