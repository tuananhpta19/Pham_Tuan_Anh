var database = require("./database");
var data = [];
for (var i = 0; i < 10000; i++) {
  let person = new database("" + i, "anh" + i);
  data.push(person);
}
module.exports = data;
