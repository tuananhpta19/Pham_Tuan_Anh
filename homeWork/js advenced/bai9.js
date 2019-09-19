var pr1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  }, 3000);
});
var pr2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(2);
  }, 2000);
});
var pr3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3);
  }, 2000);
});
Promise.all([pr1, pr2, pr3])
  .then(function(data) {
      console.log(data);
  })
  .then(function(){},function(data){
    console.log(data);
  })