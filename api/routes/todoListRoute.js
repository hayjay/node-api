'use strict';

module.exports = function(app){
    let todoList = require('../controllers/todoListController'),
    userAuth = require('../../auth/AuthController');

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

    app.route('/register')
        .post(userAuth.createUser);
    
    app.route('/me')
            .get(userAuth.getToken);

    app.route('/login')
        .post(userAuth.userLogin);

    app.route('/logout')
        .get(userAuth.logOut);
};