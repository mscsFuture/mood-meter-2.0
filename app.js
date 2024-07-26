var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

expressSession = require('express-session');
app.use(expressSession({
	secret: 'secret',
	resave: true,
	saveUninitialized: false,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


let server = require("./server");

// These routes are used to organize the app into different sections. For instance, everything that shows up when the user enters "/game" in their url should be in the
// "game.js" route file.
const loginPageRoute = require('./routes/login-page');
app.use('/login-page', loginPageRoute);

const classSelectRoute = require('./routes/class-select');
app.use('/class-select', classSelectRoute);

const gameRoute = require('./routes/game');
app.use('/game', gameRoute);


const pool = server.makeConnection();
exports.getPool = function() {
  return pool;
}

app.get('/', (req, res) => {
  res.redirect('login-page');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(3000);