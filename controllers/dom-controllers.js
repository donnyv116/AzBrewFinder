var express = require('express');
var domRouter = express.Router();
var models = require('../models');
var path = require('path');
var passport = require("passport");
var USER_SESSION = null;


function signInUser(req, res, error, user, info){
  if(error) { res.redirect('/login'); } 
  
  if(!user) { res.redirect('/login');} 
  USER_SESSION = user;
  console.log(USER_SESSION);

 
  res.redirect('/view/breweries');
}


function isUser(req, res, next){
 
  if(USER_SESSION == null){
    req.session.messages = "You need to login to view this page";
    res.redirect('/login');
  }
  else{
    next();
  }
  
}


domRouter.get('/', function (req, res){
  res.render('index');
});

domRouter.get('/signup', function (req, res){
  res.render('signup');
});

domRouter.get('/login', function (req, res){
  res.render('login');
});



domRouter.post('/user/login', function(req, res, next) {
  passport.authenticate('local', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});

domRouter.post('/user/signup', function(req, res, next){
  console.log(req.body.username, req.body.password);
  passport.authenticate('local-signup', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});

domRouter.get('/user/logout', function(req, res) {
  req.session.destroy();

  USER_SESSION = null;

    res.redirect('/');
});



domRouter.get('/view/breweries', isUser, function(req, res){

  
  models.Users.findAll({
    where: {
      id: USER_SESSION.id 
    },
    include: [models.Breweries],
    
  }).then(function(data){

    
    var hbsObject = { breweries: data };

    res.render('viewAccount', hbsObject);

  });

});

// =========================================================
domRouter.get('/view/breweries', isUser, function (req, res){

  
  models.Breweries.findAll({
    include: [{
      model: models.Users,
      where: {id: USER_SESSION.id} 
    }]
  }).then(function(excludeData){

      
      var excludeTheseIds = [];
      for(var i=0; i<excludeData.length; i++){
        excludeTheseIds.push(excludeData[i].id);
      }
      console.log(excludeTheseIds)

      
      models.Breweries.findAll({}).then(function(allData){

      
        var allIds = [];
        for(var i=0; i<allData.length; i++){
          allIds.push(allData[i].id);
        }

        var displayTheseIds = [];
        for(var i=0; i < allIds.length; i++){
          var pushToUser = true;
          for(var j=0; j < excludeTheseIds.length; j++){
           
            if(allIds[i] == excludeTheseIds[j]){
              pushToUser = false;
            }
          }
          
          if(pushToUser){
            displayTheseIds.push(allIds[i]);
          }
        }
        console.log(displayTheseIds)

        
        models.Breweries.findAll({
          order: [['breweryName', 'ASC']],
          where: {id: displayTheseIds}
        }).then(function(data){

          
          var hbsObject = { 
            user: USER_SESSION.id, 
            Breweries: data 
          };
          res.render('addBreweries', hbsObject);
      });

    });

  });

});

module.exports = domRouter;