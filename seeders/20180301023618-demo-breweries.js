'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
 return queryInterface.bulkInsert('Breweries', [
      {breweryName: "Rock Bottom",address: "123 Fake way", phone#: "602-555-8798" brewImageURL:"https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/021d4712e5da40b894157c1db1e04e4a.jpg" createdAt: new Date(), updatedAt: new Date()},
      {breweryName: "Black Bridge",address: "3221 Fake way", phone#: "602-555-5646" brewImageURL:"https://upload.wikimedia.org/wikipedia/en/2/2c/RollingRock301_Logo.JPG" createdAt: new Date(), updatedAt: new Date()},
      
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Breweries', null, {truncate : true});

  }
};
