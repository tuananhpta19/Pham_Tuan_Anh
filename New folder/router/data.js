var food = require('./food');
var data =[];
for(var i = 0; i<10000;i++){
    let beef = new food("beef "+i, ""+i);
    data.push(beef)
}
module.exports=data;