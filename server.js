
var express = require('express');    // call express
var app = express();
var router = require('./server/routes.js');
var path = require('path');
var connection = require('./server/connection.js');

var port = process.env.PORT || 8080;

app.listen(port);
console.log('Magic happens on port ' + port);
app.use(express.static(path.join(__dirname, 'client')));

// apply the routes to our application
app.use('/api', router);
