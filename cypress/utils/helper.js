// Utility functions for Cypress tests
export function generateRandomEmail() {
  return `user_${Date.now()}@test.com`;
}

export function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}
