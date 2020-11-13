const fs = require("fs");

process.stdout.write("prompt > ");

module.exports = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd.includes("cat")) {
    //   cat filepath
    fs.readFile(cmd.slice(4), "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }

  process.stdout.write("You typed: " + cmd);

  process.stdout.write("\nprompt > ");
});
