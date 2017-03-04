'use strict';

var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {

  if (req.url.indexOf('.html') != -1) {
    fs.readFile(process.cwd() + '/' + 'index.html', function (err, data) {
      if (err) console.log(error);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  if (req.url.indexOf('.css') != -1) {
    fs.readFile(process.cwd() + '/' + 'dist/css/style.min.css', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  }

}).listen(3000, '127.0.0.1');

console.log('Port listening on http://127.0.0.1:3000/index.html');