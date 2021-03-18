var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
/* GET users listing. */
let users;
MongoClient.connect('mongodb://localhost:27017/profiles', function (err, client) {
  if (err) throw err

  var db = client.db('profiles')

  db.collection('users').find().toArray(function (err, result) {
    if (err) throw err
    users = result;
    console.log(result)
    console.log(users)
  })
})

router.get('/', function(req, res, next) {
  console.log(users);
  res.json(users);
  next();
});

module.exports = router;
