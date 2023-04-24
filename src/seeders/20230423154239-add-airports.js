'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name: 'Devi Ahilya Bai Holkar Airport',
      address: 'Indore, Madhya Pradesh, India',
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chhatrapati Shivaji Maharaj International Airport',
      address: ' Sahar, Andheri East. Mumbai, Maharashtra 400029, INDIA',
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'INDIRA GANDHI INTERNATIONAL AIRPORT ',
      address: 'Palam, Delhi',
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'SAFDARJUNT AIRPORT',
      address: 'Safdarjung Airport ,New Delhi-110003',
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
