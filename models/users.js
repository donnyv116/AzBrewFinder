'use strict';
var bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
    // classMethods: {
      Users.associate = function(models) {

        Users.belongsToMany(models.breweries, {through: 'BreweryLikes'});
        // Users.belongsToMany(models.Cities, {through: 'CityLikes'});
                
      };
    
    // instanceMethods: {
      Users.prototype.someMethod= function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      },
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      },
    }
  });

  Users.hook('beforeCreate', function(user, options) {
    user.password = user.generateHash(user.password);
  });
  return Users;
};