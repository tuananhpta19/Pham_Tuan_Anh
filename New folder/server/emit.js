var EventEmitter = require('events');
class emitter extends EventEmitter{
    constructor(){
        super();
        this.count = 0;
    }
     getCount(){
    console.log(myEmitter.count);
    }
}
var myEmitter = new emitter();
myEmitter.on('goPage',function(){
    this.count++;
});
myEmitter.emit("goPage");
emitter.getCount();