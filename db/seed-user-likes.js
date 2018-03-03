// NOTE: This file is used to create seeded associations between users and their likes.
.


// Dependency
var models = require('../models'); 
var sequelizeConnection = models.sequelize;

sequelizeConnection.sync()
.then(function(){



  //Brewery Likes
  // ===================================

  // User 1
  models.Users.findOne({
    where: {
      id: 1
    }
  }).then(function(user){
    user.addBrewery([1]);
  });


  // User 2
  models.Users.findOne({
    where: {
      id: 2
    }
  }).then(function(user){
    user.addBrewery([1]);
  });


  // User 3
  models.Users.findOne({
    where: {
      id: 3
    }
  }).then(function(user){
    user.addBrewery([1]);
  });


  // User 4
  models.Users.findOne({
    where: {
      id: 4
    }
  }).then(function(user){
    user.addBrewery([1]);
  });



  // CityLikes
  // ==========================================

  // User 1
  models.Users.findOne({
    where: {
      id: 1
    }
  }).then(function(user){
    user.addCity([2, 3, 1]);
  });


  // User 2
  models.Users.findOne({
    where: {
      id: 2
    }
  }).then(function(user){
    user.addCity([1,4]);
  });


  // User 3
  models.Users.findOne({
    where: {
      id: 3
    }
  }).then(function(user){

    user.addCity([1, 2, 3, 4]);
  });


  // User 4
  models.Users.findOne({
    where: {
      id: 4
    }
  }).then(function(user){
    user.addCity([4, 1]);
  });


})