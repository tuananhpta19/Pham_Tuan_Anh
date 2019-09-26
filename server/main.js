var express = require('express');
var server = express();
var fs = require('fs');
var path = require('path');
server.get('/',(req,res,next)=>{
     fs.readFile(path.join(__dirname, "./template.html"), function(err, data) {
       res.end(data);
     });
});
server.get("/login", (req, res, next) => {
  res.end("day la trang login");
});
server.get("/contact", (req, res, next) => {
  res.end("day la trang contact");
});
server.listen(3000,()=>{
    console.log('dang lang nghe tai 3000');
})