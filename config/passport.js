'use strict'

var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
models = require('../models');

module.exports = function(app){

  // Serialize
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  // Deserialize
  passport.deserializeUser(function(user, done) {
    models.Users.findById(user.id, function(err, user) {
      done(err, user);
    });
  });

  // Logining in
  passport.use('local', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(username, password, done){
      models.Users.findOne({ where: {email: username} }).then(function(user){
        if (!user) {
          console.log("USER NOT FOUND");
          return done(null, false);
        }
        if (!user.validPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  ));

// Signing up
  passport.use('local-signup', new LocalStrategy({
      passReqToCallback: true,
      usernameField: 'email',
      passwordField: 'password'
    },
    function(req, username, password, done){
      models.Users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: username,
        password: password
      }).then(function(user) {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.save();
        return done(null, user);
      }).catch(function() {
        return done(null, false);
      });
    }
  ));

}