'use strict';
module.exports = (sequelize, DataTypes) => {
  var Breweries = sequelize.define('Breweries', {
    breweryNamee: DataTypes.STRING,
    address: DataTypes.STRING,
    phone#: DataTypes.STRING,
    brewImageURL: DataTypes.STRING
  }, {
 classMethods: {
 	associate: function(models) {
    // associations can be defined here
    Breweries.belongsToMany(models.Users, {through: 'Breweries'});
      }
    }
  });
  return Breweries;
};