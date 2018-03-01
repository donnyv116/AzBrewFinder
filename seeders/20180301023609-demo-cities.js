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
 return queryInterface.bulkInsert('Cities', [
      {cityName: "Glendale", cityImageURL:"http://www.glendaleaz.com/airport/images/SuperBowlSlide_Airport_lg.jpg" createdAt: new Date(), updatedAt: new Date()},
      {cityName: "Phoenix", cityImageURL:"http://www.luxurymeetingssummit.com/wp-content/uploads/2017/01/Phoenix-AZ.jpg" createdAt: new Date(), updatedAt: new Date()},
      {cityName: "Tempe", cityImageURL:"http://www.freedomautoglass.com/wp-content/uploads/2014/11/tempe-az.jpg" createdAt: new Date(), updatedAt: new Date()},
      {cityName: "Gilbert", cityImageURL:"http://www.clustermapping.us/sites/default/files/styles/full/public/images/blog/Downtown%20Gilbert%20Night.jpg?itok=T7HIIDLG" createdAt: new Date(), updatedAt: new Date()}
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Cities', null, {truncate : true});

  }
};