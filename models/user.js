'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

        Users.belongsToMany(models.breweries, {through: 'BreweryLikes'});
        // Users.belongsToMany(models.Cities, {through: 'CityLikes'});
        
        
      }
    },
    instanceMethods: {
      generateHash: function(password) {
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