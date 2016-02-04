var http = require('http');
var fs = require('fs');
var path = require('path');
//var page = require('./public/index.html');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

var content;
var index = fs.readFile('./public/index.html',function(err, data){
  if(err){
    throw err; 
  }
  content = data; 
});

function(){
  console.log("CONTENT!!   ", content);
}();

exports.handleRequest = function (req, res) {
  if(req.method === 'GET'){  
    res.on('data', function(data){})  
    response.writeHead(200, headers);
    response.end(index);
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

  res.end(archive.paths.list);
};