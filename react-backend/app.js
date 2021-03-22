var createError = require('http-errors');
var express = require('express');
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require('multer');
const path = require('path');
const methodOverrid = require('method-override');
const GridFsStorage = require('multer-gridfs-storage')
const crypto = require('crypto')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRouter = require('./routes/create');
var updateRouter = require('./routes/update')
require('dotenv').config()
var app = express();
const port = process.env.PORT || 5000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const storage = multer.diskStorage({
    destination: "./public/images",
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });


let upload = multer(storage);

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/create', createRouter);
app.use('/update', updateRouter)
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

app.get('/', function(req, res) {
  
  res.sendFile(path.join(__dirname + '/../profile-builder/src', 'index.js'));
});

app.listen(port, () => {
  console.log(path.join(__dirname + '/../profile-builder/src', 'index.js'))
  console.log(port)
})
module.exports = app;
