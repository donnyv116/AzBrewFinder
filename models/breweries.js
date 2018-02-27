'use strict';
module.exports = (sequelize, DataTypes) => {
  var Breweries = sequelize.define('Breweries', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Breweries.associate = function(models) {
    // associations can be defined here
  };
  return Breweries;
};