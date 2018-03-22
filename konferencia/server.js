var http = require ('http');
var express = require('express');
var app = express ();

var server = http.createServer (app);



app.use('/', express.static('.'));




server.listen (9000, () => {
  console.log ('Listen on port 9000');
});
