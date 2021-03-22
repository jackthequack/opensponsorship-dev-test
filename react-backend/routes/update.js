var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/profiles'
const User = require('../user_model.js')
const multer = require('multer')
const fs = require('fs')
const path = require('path');
mongoose.connect(process.env.MONGODB_URI || mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
require('dotenv').config()


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({storage: storage})

router.put('/', upload.single('file'), function(req, res, next) {
    let newId;
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
   
    

  
});

router.post('/img', function(req, res, next) { 

})
module.exports = router;
