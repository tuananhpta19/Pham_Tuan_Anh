var pr4 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(2);
  }, 1000);
});
pr4.then(function(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      kq= data*2;
      resolve(kq);
    }, 1000);
  });
})
.then(function(data){
  console.log(data>10);
});
