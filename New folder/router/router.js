var express = require('express');
var server = express();
var router = express.Router();
var database = require('./data');
// lay param 
router.get('/js/:number1',(req,res,next)=>{
    res.json(Number(req.params.number1) + Number(req.params.number2));
})
// lay query
router.get("/c", (req, res, next) => {
    // localhost:3001/test/c?number1=6
  res.end(req.query.number1);
});
//lay data
router.get("/data/:page",(req,res,next)=>{
    var data=[];
    var page = req.params.page-1;
    for(var i = page*20;i<page*20+20;i++){
        data.push(database[i]);
    }
    res.send(data);
});
server.use('/test',router)
server.listen(3001,()=>console.log("dang lang nghe tai cong 3000"));