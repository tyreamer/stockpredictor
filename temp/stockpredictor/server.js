var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Baby = require('babyparse')

var app = express();

//Set Port
app.set('port', (process.env.PORT || 3002));

//Set static path to client-side html files
app.use(express.static(path.join(__dirname, 'client')));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Start server
app.listen(app.get('port'), function() {
	console.log('Server started on port: ' + app.get('port'));
});
