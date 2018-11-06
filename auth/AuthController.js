// AuthController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');
var jwt = require('jsonwebtoken');
// recuire bycrypt package for the purpose of password encryption
var bcrypt = require('bcryptjs');
//require config.js in the root project directory
var config = require('../config');

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

  