// output a prompt
process.stdout.write("prompt > ");

// std
module.exports = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    process.stdout.write(__filename);
  }

  process.stdout.write("You typed: " + cmd);

  process.stdout.write("\nprompt > ");
});
