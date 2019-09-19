var fs = require("fs");
var path = require("path");
var contentDB = path.join(__dirname + "./content.txt");
console.log(contentDB);
fs.readFile("content.txt", 'utf8',function(err, data) {
  // console.log(data);
});
fs.writeFile('content.txt','world',function(err){
    if(err) throw err;
    // console.log('Done!');
})
var pr =new Promise(function(res, rej) {
  fs.readFile("demo.jpg", function(err, data) {
    res(data);
  });
})
pr.then(function(data) {
  fs.writeFile(path.join(__dirname,"anh2.jpg"), data, function(err) {
    console.log("a");
  });
});
//cach khac
fs.readFile('demo.jpg',function(err,data){
  // if(err) throw err
  fs.writeFile('demo2.png',data,function(err){
    if(err) throw err;
    // console.log("done");
  });
})