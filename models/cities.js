'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cities = sequelize.define('Cities', {
     cityNamee: DataTypes.STRING,
     cityImageURL: DataTypes.STRING
  }, {
 classMethods: {
 	associate: function(models) {
    // associations can be defined here
    Cities.belongsToMany(models.Users, {through: 'Cities'});
      }
    }
  });
  return Cities;
};