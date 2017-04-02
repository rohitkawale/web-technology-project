var express = require('express');
var expressjwt=require('express-jwt');
var jwt=require('jsonwebtoken');

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

var port=process.env.PORT || 1337;

app.get('/hello',function(req,res){
	res.json({ok:true,message:'hello'});
})

app.listen(port,function(){
	console.log("hello 1337")
});