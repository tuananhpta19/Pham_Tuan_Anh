const chalk = require("chalk");
console.log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));
module.exports={
    red: chalk.red,
    blue: chalk.blue,
}
