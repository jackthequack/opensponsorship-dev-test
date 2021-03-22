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
const serveReact = require('./routes/react')
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/profiles'

const User = require('./user_model.js')


require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
}, () => {console.log("Connected to DB")})
const storage = multer.diskStorage({
  destination: './public/images',
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
let upload = multer({storage: storage});

var app = express();
const port = process.env.PORT || 5000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));


app.get('/users', (req, res) => {
  User.find({}, (err, userList) => {
    res.send(userList)
  })
})
app.post('/create', upload.single('file'), (req, res) => {
  let newId;
  const newProfile = {};
  newProfile.firstName = req.body.firstName,
  newProfile.lastName = req.body.lastName,
  newProfile.sports = req.body.sports,
  newProfile.gender = req.body.gender,
  newProfile.dateOfBirth = req.body.dateOfBirth,
  newProfile.description = req.body.description,
  newProfile.team = req.body.team,
  newProfile.location = req.body.location
  newProfile.profilePic = '/images/' + req.file.filename
      
      console.log("Profile: " + req.file)
     console.log(req.file.filename)

      let userInstance = new User(newProfile);
      console.log(userInstance)
      userInstance.save((err) => {
          if(err){
              console.log("ERROR")
              return err;
          }
          else{
              console.log("saved");
              res.status(200).end();
          }
          
      })
      
})
app.put('/update', upload.single('file'), (req, res) => {
    console.log("File: " + req.file)
    console.log("Profile: " + req.body.profilePic)
    const newProfile = {};

    newProfile.firstName = req.body.firstName,
    newProfile.lastName = req.body.lastName,
    newProfile.sports = req.body.sports,
    newProfile.gender = req.body.gender,
    newProfile.dateOfBirth = req.body.dateOfBirth,
    newProfile.description = req.body.description,
    newProfile.team = req.body.team,
    newProfile.location = req.body.location
    if(req.file) {
        newProfile.profilePic = '/images/' + req.file.filename;
    }
    else {
        newProfile.profilePic = req.body.profilePic
    }
        console.log(newProfile.profilePic)
    console.log(__dirname)
    User.findById(req.body["_id"], (err, oldUser) => {
        if(newProfile.profilePic != oldUser.profilePic){
            fs.unlinkSync(path.join(__dirname, '..', 'public', oldUser.profilePic), (err) => {
                if(err) throw err;
                console.log("Deleted:", oldUser.profilePic)
            })
            User.findByIdAndUpdate(req.body["_id"], newProfile, {new: true}, (err, newUser) => {
                console.log("Updated user: ", newUser)
                res.status(200).send(newUser);
            });
        }
        else{
            User.findByIdAndUpdate(req.body["_id"], newProfile, (err, newUser) => {
                console.log("Updated user: ", newUser)
                res.status(200).end();
            });
        }
        
    })
   
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));

})

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/create', createRouter);
// app.use('/update', updateRouter)
// app.use(function(req, res, next) {
//   res.sendFile(path.join(__dirname + '/../profile-builder/src/index.js'));

// })
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



app.listen(port, () => {
  // console.log(path.join(__dirname + '/../profile-builder/public', 'index.html'))
  console.log(port)
})
module.exports = app;
