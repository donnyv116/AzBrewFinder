var express = require('express');
var crudRouter = express.Router();
var models = require('../models');



crudRouter.post('/create/user', function (req, res){

  models.Users.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      facebookId: req.body.facebookId
    }
  ).then(function(){
      res.redirect('/index');
  });

});



crudRouter.get('/:action/brewery/:userId/:breweryId', function(req, res){

  var action = req.params.action;

  if(action == 'add'){

    models.Users.findOne({
      where: {
        id: req.params.userId
      }
    }).then(function(user){
      user.addBrewery(req.params.breweryId)
      .then(function(data){
        res.json(data);
      });
    });

  }

  else if(action == 'remove'){

    models.Users.findOne({
      where: {
        id: req.params.userId
      }
    }).then(function(user){
      user.removeBrewery(req.params.breweryId)
      .then(function(data){
        res.json(data);
      });
    });

  }
  else{

    res.redirect('index');
  }

});


// For future deployment
// crudRouter.get('/:action/state/:userId/:stateId', function(req, res){

//   var action = req.params.action;

//   if(action == 'add'){

  
//     models.Users.findOne({
//       where: {
//         id: req.params.userId
//       }
//     }).then(function(user){
//       user.addCity(req.params.cityId)
//       .then(function(data){
//         res.json(data);
//       });
//     });

//   }

//   else if(action == 'remove'){


//     models.Users.findOne({
//       where: {
//         id: req.params.userId
//       }
//     }).then(function(user){
//       user.removeState(req.params.cityId)
//       .then(function(data){
//         res.json(data);
//       });
//     });

//   }

//   else{
//       res.redirect('index');
//   }

// });



module.exports = crudRouter;