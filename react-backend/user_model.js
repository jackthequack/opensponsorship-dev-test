const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    sports: String,
    gender: String,
    dateOfBirth: String,
    description: String,
    team: String,
    location: String,
    profilePic: String,
  })
  
  module.exports = mongoose.model('users', UserSchema);