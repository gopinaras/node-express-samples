var express = require("express");
var app = express();
var fs = require('fs'),
    path = require('path'),
    filePath = path.join('staticfiles', 'response.txt');
data = "API Requested"
app.get("/url", (req, res, next) => {
 //res.json(["Welcome to my Rest API in Node JS",process.env.MAVEN_HOME]);
 fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
     if (!err) {
         rplData=data.replace('replace_hostid',[process.env.MAVEN_HOME])
         console.log('received data: ' + rplData);
         res.writeHead(200, {'Content-Type': 'json'});
         res.write(rplData);
         //res.write([process.env.MAVEN_HOME]);
         res.end();
     } else {
         console.log(err);
     }
 });
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
