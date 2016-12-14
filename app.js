var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./db');

// passport variables

var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');

// routes variables

var index = require('./routes/index');
var profile = require('./routes/profile');
var park = require('./routes/park');
var parks = require('./routes/parks');
var login = require('./routes/login.js');
var signup = require('./routes/signup.js');

var app = express();

// model variables
var User = require('./models/user.js');
var Park = require('./models/park.js');

// Connect to the database
mongoose.connect('mongodb://kathrynwood:Clover24**@ds133438.mlab.com:33438/wdi-project-2');

// our app will not exit until we have disconnected from the db.
// function quit() {
//   mongoose.disconnect();
//   console.log('All Done!');
// }
//
// quit();

// view engine setup
app.set('views', path.join(__dirname, 'appViews'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// passport
app.use(session({ secret: 'WDI Rocks!',
                  resave: true,
                  saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// This middleware will allow us to use the currentUser in our views and routes.
app.use(function (req, res, next) {
  global.currentUser = req.user;
  next();
});

require('./config/passport/passport')(passport);

// routes
app.use('/', index);
app.use('/profile', profile);
app.use('/parks', parks);
app.use('/parks', park);
app.use('/login', login);
app.use('/signup', signup);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// db connection test
// User.create({ name: "Katie", email: "woodkm11@gmail.com"}, function(err, result) {
//   console.log("result:", result);
// });

module.exports = app;
