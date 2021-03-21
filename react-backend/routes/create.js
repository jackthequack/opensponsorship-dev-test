var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoDB = 'mongodb://localhost:27017/profiles'
// var MongoClient = require('mongodb').MongoClient
const crypto = require('crypto')
const multer = require('multer');
const path = require('path');
const User = require('../user_model.js')
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
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

  let upload = multer({storage: storage});
// let gfs;

// connect.once('open', () => {
//     gfs = new mongoose.mongo.GridFSBucket(connect.db, {
//         bucketName: "profilePictures"
//     })
// })
router.post('/', upload.single('file'), function(req, res, next) {
    
    let newId;
    // for(i in req.body){
    //     console.log(req.body[i])
    // }
    
    // console.log("Profile data", req.body)
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
        
    }
);

router.post('/img', function(req, res, next) { 

})
module.exports = router;
