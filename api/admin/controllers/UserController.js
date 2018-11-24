'use strict';

let mongoose = require('mongoose'),
    User = require('../../models/userModel');

exports.getUsers = (req, res) => {
    User.find({}, (err, users) => {
        if(err)
            res.send(err).status(400);
        res.json(users);
    });
};