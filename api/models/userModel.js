'use strict';
var mongoose = require('mongoose');  
var Schema = mongoose.Schema;
var UserSchema = new Schema({  
  name : {
      type : String,
      required : 'Duplicate email address found'
  },
  email: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);