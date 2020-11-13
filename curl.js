const request = require("request");

module.exports = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd.includes("curl")) {
    request(`http://www.${cmd.slice(5)}`, function (error, response, body) {
      console.log("body:", body); // Print the HTML for the Google homepage.
    });
  }
});
