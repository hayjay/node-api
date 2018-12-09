'use strict';

module.exports = function(app){
    let todoList = require('../controllers/todoListController'),
    userAuth = require('../../auth/AuthController'),
    users = require('../admin/controllers/UserController'),
    middlewareVerifyToken = require('../../auth/VerifyToken');

    //todoList Routes
    app.route('/tasks', middlewareVerifyToken)
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
    
    //add midleware to get token route
    //adding this middleware make users with verified tokens
    //can access the resources!
    app.route('/me', middlewareVerifyToken)
            .get(userAuth.getToken);

    app.route('/login')
        .post(userAuth.userLogin);

    app.route('/logout')
        .get(userAuth.logOut);
    
    app.route('/admin/users/all')
        .get(users.getUsers);
};

// Remember, authentication is the act of logging a user in.
//  Authorization is the act of verifying the
//  access rights of a user to interact with a resource.