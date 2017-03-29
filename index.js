var express = require('express');

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */
var bodyParser = require('body-parser');

// create our app
var app = express();
var dbconn = require('./api/config/connect.js')

// app.use(bodyParser.json({ type: 'application/*+json' }));
 app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', express.static('public'))
app.use('/ops', express.static('ops'))
dbconn.connect(function(){
  var user_api = require('./api/user_api');
  app.use('/api/',user_api);
});


app.listen(8000,function(){
	console.log("hello 8000")
});