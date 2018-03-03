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
    return queryInterface.bulkInsert('Users', [
      {firstName: "George", lastName: "Carlin", email: "GeorgeC@gmail.com", password: "$2a$08$uw8/mPzGaMUwdyR/XiLFCuvEaTl9Tnm6VFLFmt4yCVaJnE0NQyqXm", createdAt: new Date(), updatedAt: new Date()},
      {firstName: "Bill", lastName: "Hicks", email: "BillH@gmail.com", password: "$2a$08$KFP5G9cXKZfWE6qA2paEm.OtBDisccMN0lNu7yka4HR1Haq0YcTNK", createdAt: new Date(), updatedAt: new Date()},
      {firstName: "Mitch", lastName: "Hedberg", email: "MitchH@gmail.com", password: "$2a$08$LaApDZE/Fiq1fVHlEAzUreNofXsrNTAEfQ4uFTiAKjrMgTPkTPshi", createdAt: new Date(), updatedAt: new Date()},
      {firstName: "Steven", lastName: "Wright", email: "StevenW@gmail.com", password: "$2a$08$bdNv.LRH3lWcOQzO2jArv.FeqHkAhA0Yium4Kk31MIWUaokxepPBG", createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {truncate : true});

  }
};
