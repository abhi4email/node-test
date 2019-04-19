var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); 
var cors = require('cors');
var errorHandler = require('./app/_helpers/error-handler');

var app = express();
var viewEngine = require('express-json-views');
app.engine('json', viewEngine({}));
app.set('views', __dirname + '/views');
app.set('view engine', 'json');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.static(path.join(__dirname, '/public')));

app.use(cors())
app.use(errorHandler);
require('./app/routes/index')(app);


module.exports = app;
