// const pwd = require("./pwd");
// const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

const done = (output) => {
  process.stdout.write("prompt > ");

  process.stdout.write("You typed: " + cmd);

  process.stdout.write("\nprompt > ");
};
