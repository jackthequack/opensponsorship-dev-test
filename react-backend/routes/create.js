var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
/* GET users listing. */
let users;

// const storage = multer.diskStorage({
//     destination: "./public/images",
//     filename: function (req, file, cb) {
//       cb(
//         null,
//         file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//       );
//     },
//   });

router.post('/', function(req, res, next) {
    let newId;
    // for(i in req.body){
    //     console.log(req.body[i])
    // }
    console.log("Profile: " + req.body.profilePic)
    const newProfile = {};
    if(typeof(req.body.id) != 'undefined'){
        newProfile.profilePic = req.body.profilePic;
        MongoClient.connect('mongodb://localhost:27017/profiles', function (err, client) {
            if (err) throw err;
    
            var db = client.db('profiles')
            let profile = db.collection('users').findOne({"_id": req.body.id})
            profile["profilePic"] = newProfile.profilePic
           for(let i in profile){
               console.log(i + " " + profile[i])
           }
            db.collection('users').updateOne({"_id": req.body.id.id}, {$set: {profilePic: newProfile.profilePic}}, (err, response) => {
                if(err) throw err;
                console.log("1 document updated")
                res.end();
            })
        })
    }
    else{
        console.log("WORKING")
        newProfile.firstName = req.body.firstName,
        newProfile.lastName = req.body.lastName,
        newProfile.sports = req.body.sports,
        newProfile.gender = req.body.gender,
        newProfile.dateOfBirth = req.body.dateOfBirth,
        newProfile.description = req.body.description,
        newProfile.team = req.body.team,
        newProfile.location = req.body.location
        
        console.log(newProfile);
        MongoClient.connect('mongodb://localhost:27017/profiles', function (err, client) {
            if (err) console.log("Error!!!")
    
            var db = client.db('profiles')
            console.log("still working")
            db.collection('users').insertOne(newProfile, (err, response) => {
                console.log("still still working")
                if(err) throw err;
                
                console.log("1 document inserted");
                db.collection('users').findOne(newProfile, (err, profile) => {
                    console.log("NEW ID: " + profile._id)
                    newID = profile._id
                    res.json({id: newID});
                })
                
                
            })
        })
    }

 
  
  
});

router.post('/img', function(req, res, next) { 

})
module.exports = router;
