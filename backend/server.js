var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var database;
var Message = mongoose.model('Message', {
  msg: String
});

// allow to use jsons
app.use(bodyParser.json());

// deal with cors
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
 });

app.get('/api/message', GetMessages);

// use the database instance/reference to insert req.body which is the $http request from frontend
app.post('/api/message', function(req, res){
  console.log(req.body);
  var message = new Message(req.body);

  message.save();

  res.status(200);
});

// get messages
function GetMessages(req, res) {
  // get all messages '({})'
  Message.find({}).exec(function(err, result){
    res.send(result);
  })
};

// connect to mongo
mongoose.connect('mongodb://localhost:27017/test', function(err, db){
  if(!err){
    console.log('we are connected to mongo');
  }
});

// start a server
var server = app.listen (5000, function(){
  console.log('listening on port', server.address().port);
});
