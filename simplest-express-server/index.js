var express = require('express'); // include the express library
var five = require('johnny-five');
var app = express(); // create a new instance of the app
var server = require('http').createServer(app); // create a new server
var io = require('socket.io'); // include the socket.io library
var socket = io.listen(server); // tell socket to listen ti the server
var board = new five.Board();
var Twit = require('twit');

var T = new Twit({
  consumer_key: '...',
  consumer_secret: '...',
  access_token: '...',
  access_token_secret: '...',
  timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
});


var port = 3000; // this is the port where we connect

// tell express to serve the public folder
// as document root
app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  // if someone e.g. you calls the url localhost:3000
  // respond with the index.html in the public folder
  res.sendfile('index.html');
});

board.on('ready', function() {
  var led = new five.Led(13);
  var button = new five.Button({pin: 2, isPullup: true});

// now build the connection via socket to the frontend
  socket.on('connection', function(client) {
    // log what the client is sending

    button.on('down', function() {
      T.post('statuses/update', {status: 'I\'m a fancy twitter bot'}, function(err, data, response) {
        console.log(data);
      });

      client.send('down');
    });

    button.on('up', function() {
      client.send('up');
    });

    client.on('message', function(message) {
      console.log(message);
      if(message === '1') {
        led.on();
      // do some state changes here
        console.log('this is message one');
      }
      if(message === '0') {
        led.off();
      // do other changes here
        console.log('this is message two');
      }
      if(message === 'three') {
      // omg a message came through with the contentthree
        console.log('this is message three');
      }
      if(message === 'four') {
      // another message arrived
        console.log('this is message four');
      }
    });
  });
});

// tell the user in the terminal where to look for the website
console.log('listening on port http://localhost:' + port);
// run the server
server.listen(port);
