'use strict';
module.exports = (sequelize, DataTypes) => {
const Users = sequelize.define('Users', { 
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });


// Class Method
Users.associate = function (models) {
    Users.belongsToMany(models.Breweries, {through: 'BreweryLikes'});
};

// Instance Method
Users.prototype.generateHash = function (password) {return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);},
Users.prototype.validPassword = function (password) {return bcrypt.compareSync(password, this.password);},

  Users.hook('beforeCreate', function(user, options) {
    user.password = user.generateHash(user.password);
  });
  return Users;
};