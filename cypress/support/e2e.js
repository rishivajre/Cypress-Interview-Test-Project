// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Prevent Cypress from failing tests on uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from failing the test
	return false;
});

// Import utility functions
import { generateRandomEmail } from './utils/helper';

// Global before hook example
before(() => {
	cy.log('Global setup before all tests');
});

// Global after hook example
after(() => {
	cy.log('Global teardown after all tests');
});

// Example: Using environment variable
const baseUrl = Cypress.env('baseUrl') || 'http://localhost:3000';
cy.log(`Base URL is: ${baseUrl}`);

// Example: Session management (clear cookies before each test)
beforeEach(() => {
	cy.clearCookies();
});

// Example: Custom logging
Cypress.Commands.add('logInfo', (message) => {
	cy.task('log', message);
});