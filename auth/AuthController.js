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