//in this controller, we would be writing five different function
    // *list all task
    // *read a task
    // *create a task
    // *update a task
    // *delete a task

//Each of these functions uses different mongoose methods such as
    // find,
    // findById,
    // findOneAndUpdate,
    // save and remove.

'use strict';

var mongoose = require('mongoose');
    Task = mongoose.model('Tasks');
    