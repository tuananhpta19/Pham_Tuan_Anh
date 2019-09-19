function capitalName() {
  this.name = this.name.toUpperCase();
}

var person1 = {
  name: "nam",
  birthDay: "1996-11-26"
};
var person2 = {
  name: "hiep",
  birthDay: "1999-01-26"
};
function age() {
  var birth = this.birthDay;
  var res = birth.split("-");
  return res[2] + "-" + res[1] + "-" + res[0];
};
console.log(age.call(person1));
console.log(age.call(person2));

