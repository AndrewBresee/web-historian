var http = require('http');
var fs = require('fs');
var path = require('path');
//var page = require('./public/index.html');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

var handleRequest = function (req, res) {
  if(req.method === 'GET'){  
    if(req.url === '/'){
      fs.readFile(path.join(__dirname, './public/index.html'), function(err, html){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();
      });
      //Use our helper funcitons to look through archive. 
      //If in archive, return it
    } else {
      console.log("REQUESTED URL! : --- ", req.url);
      archive.isUrlInList(req.url, function(url){
      //if URL is there, return URL. 
      //otherwise, change callback to add to the list. 
      fs.readFile(path.join(__dirname, req.url), function (urls) {
        if(urls.indexOf(req.url) !== -1){
          return req.url; 
        }
      });
    });

    // else {
    //   throw err;
    // }
  }
  }
};

exports.handleRequest = handleRequest;