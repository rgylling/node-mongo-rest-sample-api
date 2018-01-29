const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  Test = require('./api/models/testModel') //created model loading here

  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/todoListRoutes'); //importing route
const routes2 = require('./api/routes/testRoutes'); //importing route
routes(app); //register the route
routes2(app); //register the route



app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
