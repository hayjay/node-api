var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    cors = require('cors');
    bodyParser = require('body-parser');

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
//connect directly to mongoose
mongoose.connect('mongodb://localhost/ReactTododb').then(
    (res) => {
        console.log("Successfully connected to the database.")
    }
    ).catch(() => {
    console.log("Conntection to database failed.");
});
app.use(cors());
app.use(bodyParser.json());

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./api/routes/todoListRoute'); //importing route
routes(app);
console.log(routes)
 //register the route file

 app.get('/', (req, res) => {
    res.send('hey').status(200);
 });


 //middleware added to check if user enters not found route 
 app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);




console.log(`todo list RESTful API server started on : ${port}`);