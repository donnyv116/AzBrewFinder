
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;

var passport = require('passport');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');


var models = require('./models');


app.use(express.static(process.cwd() + '/public'));
// app.use(express.static('public'));


app.use(morgan('dev')); 
app.use(cookieParser('mysecret')); 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
  secret: 'mysecret',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session()); 
require('./config/passport')(app);

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



models.sequelize.sync();

app.use(function (req, res, next){
  res.locals.user = req.user || null;
  next();
})


var domRouter = require('./controllers/dom-controllers.js');
app.use('/', domRouter);

var crudRouter = require('./controllers/crud-controllers.js');
app.use('/', crudRouter);

var findRouter = require('./controllers/find-controllers.js');
app.use('/', findRouter);


app.listen(port);
console.log('The magic happens on port ' + port);
