'use strict';

module.exports = function(app){
    var todoList = require('../controllers/todoListController');

    //todoList Routes
    app.route('/tasks')
        //reuising the tasks route for get and post http method
        .get(todoList.list_all_tasks)  //calling function list_all_tasks in the controller
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        //reuising the tasks/taskId route for get and put and delete http method
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};