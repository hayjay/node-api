'use' strict;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name : {
        type : String,
        required : 'Kindly enter task name'
    },
    Created_date : {
        type : Date
    }
});