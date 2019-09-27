var express = require("express");
var server = express();
// var router = express.Router();
var data = require('./data');
var cors= require('cors');
var getData = [];
server.use(cors());
server.get("/:page",(req,res,next)=>{
    var page = req.params.page-1;
    for(var i = page*20;i<page*20+20;i++){
        getData.push(data[i]);
    }
    res.send(getData);
});
server.listen(3002,function(){
    console.log("dang lang nghe tai cong 3000");
})