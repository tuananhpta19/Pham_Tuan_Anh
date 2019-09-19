var ages = [32, 33, 12, 40, 1, 1.2];
var soChan = ages.filter(function(number) {
  return number % 2 == 0;
});
// console.log(soChan);
var persons = [
  {
    name: "tien",
    birthday: "30-04-1998"
  },
  {
    name: "tuan anh",
    birthday: "01-05-1994"
  },
  {
    name: "trung",
    birthday: "02-09-1997"
  },
  {
    name: "doan",
    birthday: "23-08-1998"
  }
];
var arr2 = [];
arr2 = arr2.concat(persons);
console.log(arr2);
// bai 1
let birth = persons.filter(person => {
  var test = person.birthday;
  var res = test.split("-", 8);
  var date = new Date(res[2], res[1], res[0]);
  console.log(date);
  return date.getMonth() > 6;
});
// console.log(birth);
// bai2
let age = persons.filter(person => {
  var test = person.birthday;
  var res = test.split("-", 8);
  var date = new Date(res[2], res[1], res[0]);
  var dateNow = new Date();
  var agess = dateNow.getFullYear() - date.getFullYear();
  return agess > 22;
});
// console.log(age);
// bai3
var test = [];
for(var i = 0;i<persons.length;i++){
  test[i] = persons[i].name;
}
var res = test.sort();
// console.log(res);
// dang khac
// bai 5
function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
// console.log(persons.sort(compare));
// bai4
function compareAge(a, b) {
  if (a.birthday < b.birthday) {
    return -1;
  }
  if (a.birthday > b.birthday) {
    return 1;
  }
  return 0;
}
// console.log(persons.sort(compareAge));
// console.log(persons.sort(compare));
// bai tap 6

var test1 = persons.map(function(value) {
  obj = Object.assign({},value);
  obj.name = obj.name.toUpperCase();
  return obj;
});
// console.log(test1);
// bai tap 7
var doan = {
  name: "Doan",
  age: 22,
  salary: 10000
};
var trung = Object.assign({}, doan);
trung.clone = true;