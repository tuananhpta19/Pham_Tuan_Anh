var pr5 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3);
  }, 3000);
});
var pr6 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(7);
  }, 5000);
});
Promise.all([pr5, pr6]).then(function(data) {
  var kq = data[0] + data[1];
  console.log(kq);
});
