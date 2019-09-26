var express = require('express');
var server = express();
var fs = require('fs');
var path = require('path');
server.use(express.static(path.join(__dirname,'public')));
server.get("/",(req,res,next)=>{
    fs.readFile(path.join(__dirname,"index.html"),function(err,data){
        res.end(data);
    });
});
server.get("/download",(req,res,next)=>{
    res.download(path.join(__dirname,"index.html"));
});
server.listen(3001,()=> {
    console.log("dang lang nghe tai cong 3000");
})