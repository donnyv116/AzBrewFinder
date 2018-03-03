'use strict';
module.exports = function(sequelize, DataTypes) {
  var Breweries = sequelize.define('Breweries', {
    breweryNamee: DataTypes.STRING,
    // address: DataTypes.STRING,
    // phone#: DataTypes.STRING,
    brewImageURL: DataTypes.STRING
  });

 // classMethods: {
 	Breweries.associate = function(models) {
    // associations can be defined here
    Breweries.belongsToMany(models.Users, {through: 'BreweryLikes'});
      };
    
  return Breweries;
}