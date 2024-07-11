var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var classSelectRouter = require('./routes/class-select');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);
// app.use('/class-select-page.ejs', classSelectRouter);


let server = require("./server");
let pool = server.makeConnection();

// classList is what we want to send to the front-end
let classList = server.getClassList(pool);

app.get('/api', (req, res) => {
  console.log(classList);
  res.status(200).json(classList);
});

app.post("/api-password", async (req, res) => {
  console.log('Payload is: ' + JSON.stringify(req.body, null, 2));
  // JSON.stringify(req.body, null, 2)
  const verdict = await server.verifyPasswordUsername(pool, req.body);
  console.log("verdict: " + verdict);
  res.send("testing: " + JSON.stringify(verdict));
});







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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



module.exports = app;
app.listen(3000);

