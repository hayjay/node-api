'use strict';
module.exports = function(app){
    let userAuth = require('../../auth/AuthController');
    // user auth endpoints
    app.route('/register')
    .post(userAuth.createUser);

    app.route('/me')
        .get(userAuth.getToken);

    // app.route('/login')
    //     .post(userAuth.userLogin);
}
  