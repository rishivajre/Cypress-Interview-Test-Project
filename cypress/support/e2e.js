// cypress/support/e2e.js

// Import commands.js using ES2015 syntax:
import './commands'

// Prevent Cypress from failing tests on uncaught exceptions
Cypress.on('uncaught:exception', () => {
  return false; // prevents Cypress from failing the test
});

// Import utility functions (adjust path if needed)
import { generateRandomEmail } from '../utils/helper';

// Example: Using environment variable
const baseUrl = Cypress.env('baseUrl') || 'http://localhost:3000';

// Global before hook example
before(() => {
  cy.log(`Base URL is: ${baseUrl}`);
  cy.log('Global setup before all tests');
});

// Global after hook example
after(() => {
  cy.log('Global teardown after all tests');
});

// Example: Session management (clear cookies before each test)
beforeEach(() => {
  cy.clearCookies();
});
