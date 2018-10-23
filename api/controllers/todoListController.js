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

//function for getting all available tasks
exports.list_all_tasks = function(req, res){
    Task.find({}, function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_task = function(req, res){
    var new_task = new Task(req.body);
    new_task.save(function(err, task){ //call the save method on the instance of the model in a callback way
        if(err)
            res.send(err);
        res.json(task);
    });
}


exports.read_a_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
};

exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
};

exports.delete_a_task = function(req,res){
    Task.remove({_id : req.params.taskId}, function(err, res){
        if(err)
            res.send(err);
        res.json({message : 'Task successfully deleted'});
    });
};
