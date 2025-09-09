// Dynamic test data management for Cypress
// Usage: import testData from '../../support/utils/testData';

const testData = {
  users: [
    {
      username: `user_${Date.now()}`,
      password: 'Password123!'
    },
    {
      username: `user_${Date.now() + 1}`,
      password: 'Password456!'
    }
  ],
  products: [
    {
      id: Math.floor(Math.random() * 10000),
      name: 'Test Product',
      price: 19.99
    }
  ],
  getRandomUser() {
    return this.users[Math.floor(Math.random() * this.users.length)];
  },
  getRandomProduct() {
    return this.products[Math.floor(Math.random() * this.products.length)];
  }
};

export default testData;
