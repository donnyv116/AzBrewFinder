'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Breweries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      breweryName: {
        type: Sequelize.STRING
      },
      // address: {
      //   type: Sequelize.STRING
      // },
      // phone#: {
      //   type: Sequelize.STRING
      // },
      brewImageURL: {
        type: Sequelize.STRING
      // },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Breweries');
  }
};