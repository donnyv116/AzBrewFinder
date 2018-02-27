
// set up ======================================================================
// get all the dependencies we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;



// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');