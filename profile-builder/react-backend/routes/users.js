var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoDB = 'mongodb://localhost:27017/profiles'
const User = require('../user_model.js')
require('dotenv').config()
/* GET users listing. */
let users;
mongoose.connect(process.env.MONGODB_URI || mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

router.get('/', function(req, res, next) {
 User.find({}, (err, userList) => {
   res.send(userList)
 })
})
  
  


module.exports = router;
