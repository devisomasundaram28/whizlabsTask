'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Laptop',
        price: 1000,
        quantity: 5,
        category: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Phone',
        price: 500,
        quantity: 10,
        category: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
};
