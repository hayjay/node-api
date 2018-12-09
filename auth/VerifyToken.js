//we will be using this function as a custom middleware
// to check if a token exist and whether it is valid
// After validating it, we add the decoded.id value to the request (req) variable.
exports.verifyToken = () => {
    let jwt = require('jsonwebtoken'),
        config = require('../config');
    let verifyToken = (req, res, next) => {
        var token = req.headers['x-access-token'];
        if (!token)
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        jwt.verify(token, config.secret, function(err, decoded) {
            if (err)
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            // if everything is good, save to request for use in other routes
            //just like a session
            req.userId = decoded.id;
            // We now have access to it in the next function
            //  in line in the request-response cycle. 
            // Calling next() will make sure flow will
            //  continue to the next function waiting in line. In the end, we export the function.
            next();
        });
    }
}