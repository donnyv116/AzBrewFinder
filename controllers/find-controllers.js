
var express = require('express');
var findRouter = express.Router();
var models = require('../models'); 



findRouter.get('/find-all-users/brewery/:breweryId', function(req, res){

    models.Countries.findAll({
      where: {
        id: req.params.breweryId
      },
      include: [models.Users],
    }).then(function(data){

        res.json(data);

    });

});

module.exports = findRouter;