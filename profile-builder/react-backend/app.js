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
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/profiles'
const User = require('./user_model.js')
const multiparty = require('multiparty');

require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {console.log("Connected to DB")})
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
   
    let path = `./public/images`;
    callback(null, path);
  },
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
app.post('/create', (req, res) => {
  let newId;
  const newProfile = {};
  let form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
      Object.keys(fields).forEach(function(name) {
           console.log('got field named ' + name);
           console.log(fields);
           if(name == '_id'){
             continue;
           }
           newProfile[name] = field[name];
       });
       console.log(newProfile)
  // newProfile.profilePic = '/images/' + req.file.filename
      
    //   console.log("Profile: " + req.file)
    //  console.log(req.file.filename)

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
app.put('/update', (req, res) => {
    // console.log("File: " + req.file)
    // console.log("Profile: " + req.body.profilePic)
    const newProfile = {};
    let form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
      Object.keys(fields).forEach(function(name) {
           console.log('got field named ' + name);
           console.log(fields);
           if(name == '_id'){
             continue;
           }
           newProfile[name] = field[name];
       });
   });
  
   console.log(newProfile)

    // if(req.file) {
    //     newProfile.profilePic = '/images/' + req.file.filename;
    // }
    // else {
    //     newProfile.profilePic = req.body.profilePic
    // }
        // console.log(newProfile.profilePic)
    // console.log(__dirname)
    User.findById(fields["_id"], (err, oldUser) => {
        // if(newProfile.profilePic != oldUser.profilePic){
        //     fs.unlinkSync(path.join(__dirname, 'public', oldUser.profilePic), (err) => {
        //         if(err) throw err;
        //         console.log("Deleted:", oldUser.profilePic)
        //     })
        //     User.findByIdAndUpdate(req.body["_id"], newProfile, {new: true}, (err, newUser) => {
        //         console.log("Updated user: ", newUser)
        //         res.status(200).send(newUser);
        //     });
        // }
        // else{
            User.findByIdAndUpdate(req.body["_id"], newProfile, (err, newUser) => {
                console.log("Updated user: ", newUser)
                res.status(200).end();
            });
        // }
        
    })
   
})
app.get('/images/:fileName', (req, res) => {
  res.sendFile('./public/images/' + req.params.fileName)
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));

})


app.listen(port, () => {
  // console.log(path.join(__dirname + '/../profile-builder/public', 'index.html'))
  console.log(port)
})})
