// Bai1 : Tôi muốn mua một chiếc khẩu trang 500k. Giao hàng qua 0866633805 ship đến địa chỉ Thái Hà
var str =
  "Tôi muốn mua một chiếc khẩu trang 500k. Giao hàng qua 0866633805 ship đến địa chỉ Thái Hà";
var pass = "12asasasN๖ۣۜW ๖ۣۜV ๖ۣۜX ๖ۣۜY ๖ۣۜZ";
function check(pass) {
  var length = /\w{8,}/gm.test(pass);
  if (!length) throw "chu phai lon hon 8";
  var uptocase = /[A-Z]/gm.test(pass);
  if (!uptocase) throw "phai co chu viet hoa";
  var number = /\d/gm.test(pass);
  if (!number) throw "phai co chu so";
  var ki = /[^A-Za-z0-9]/gmu.test(pass);
  if (!ki) throw "phai co ki tu dac biet";
}
try{
   check(pass);
   console.log('done');
}catch(err){
    console.log(err);
}
var str ="  aaaa      ;kc,        kjcn";
var kq = str.split(/\s+/gmi); 
console.log();
var kq1 = str.replace(/\s+/gim," ");
// console.log(kq1);
var kq2 = kq1.replace(/^\s+/gim, " ");
console.log(kq2);