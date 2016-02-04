var http = require('http');
var fs = require('fs');
var path = require('path');
//var page = require('./public/index.html');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

var handleRequest = function (req, res) {
  if(req.method === 'GET'){  
    fs.readFile('./public/index.html', function(err, html){
      if(err){
        throw err;
        // console.log("ERROR!!");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html);
      res.end();
    });
   
  }

  //   response.sendFile('./public/index.html');
  //   fs.readFile('./public/index.html', function(err, html){
  //     if(err){
  //       throw err;
  //     }
  //     http.createServer(function(req, res){
  //       res.writeHead(200, {"Content-Type": "text/html"});
  //       res.write(html);
  //         res.end();
  //     }).listen(8000);
  //   }
  // ); 
};

exports.handleRequest = handleRequest;