'use strict';
module.exports = (sequelize, DataTypes) => {
  var Breweries = sequelize.define('Breweries', {
    breweriesNamee: DataTypes.STRING,
    // address: DataTypes.STRING,
    // phone#: DataTypes.STRING,
    breweriesImageURL: DataTypes.STRING
  }, {
 classMethods: {
  associate: function(models) {
    // associations can be defined here
    Breweries.belongsToMany(models.Users, {through: 'BreweryLikes'});
      }
    }
  });
  return Breweries;
};