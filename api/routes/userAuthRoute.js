'use strict';
module.exports = function(app){
    let userAuth = require('../../auth/AuthController');

    // user auth endpoints
    app.route('/register')
    .post(user)
}
//registration endpoint
router.post('/register', function(req, res) {
    //encrypt the user password with bcrypt hashing method
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    //take the hashed password with the name of the user and email and create new user
    User.create({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      //The jwt.sign() method takes a payload and the secret key defined in config.js
      // as parameters. It creates a unique string of characters representing the payload. 
      //In our case, the payload is an object containing only the id of the user
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    }); 
  });
  //after creating the user, we can now easily create a token for him/her

  //a piece of code to get the user id based on the token
  //    we got back from the register endpoint.
  //   endpoint 
  router.get('/me', function(req, res) {
    var token = req.headers['x-access-token'];
    //If there is no token provided with the request the server
    // sends back an error. To be more precise, 
    //an 401 unauthorized status with a response message of ‘No token provided’.
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    //If the token exists, the jwt.verify() method will be called.
    // This method decodes the token making it possible to view the original payload.
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      //if there are no errors
      //send back the decoded value as the response.
      res.status(200).send(decoded);
    });
  });

  