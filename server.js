var express = require('express')
var path = require('path')
var port = process.env.PORT || 2000
var app = express()
var google = require("googleapis");


//chat
var custom_socket = require('./socket/socket.js');
var http = require('http').Server(app);
var server = require('http').createServer(app); 
var io = require('socket.io').listen(server);

io.sockets.on('connection', custom_socket);


app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'login.html'))
});

app.get('/landing/*', function(request, response){
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

server.listen(port)
console.log("server started on port " + port)


//google oauth
var OAuth2 = google.auth.OAuth2;
var plus = google.plus('v1');
var oauth2Client = new OAuth2(
  "622980738066-k6rab23q4e4ismmcio28bm6tm4q6koao.apps.googleusercontent.com",
  "M2YNR4y-07ymxpL2M8DXIjvX",
  "http://localhost:2000/auth/google/callback"
);

var scopes = [
  'https://www.googleapis.com/auth/plus.me'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

var code;

app.get("/login", function(req, res) {
  res.redirect(url);
});

app.get("/auth/google/callback", function(req, res) {
  code = req.query.code;

  oauth2Client.getToken(code, function (err, tokens) {
    //console.log(tokens);
    if (err) {
      res.send(err);
    }

    if (!err) {
      oauth2Client.setCredentials(tokens);

      plus.people.get({
        userId: 'me',
        auth: oauth2Client
      }, function (err, response) {
        //res.send(response);
        //res.send("Welcome " + response.displayName);
        var afterlogin = "/landing/react/" + response.displayName;
        res.redirect(afterlogin);
        if(err) {
          console.log(err);
        }
      });
    }
  });

});
