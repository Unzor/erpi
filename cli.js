var fs = require("fs");
var cli = require("cli2json").parse(process.argv.slice(2).join(""), {
  readCommandAfter: ["-i", "--insert"]
})
var fetch = require("node-fetch")
var index_url = "https://erpi.herokuapp.com/packages/";
if (cli.arguments[0]) {
  if (cli.arguments[0] == "install") {
    if (cli.arguments[1]) {
      if (cli.flags[0]) {
     fetch(index_url + cli.arguments[1])
       .then(response => response.text)
       .then(response => {
         fs.writeFileSync(cli.flags[0], response + fs.readFileSync(cli.flags[0]).toString());
         console.log("Wrote to file.")
       }); 
      } else {
        console.log("No file to insert module into was found!");
      }
    }
    else {
      console.log("No argument found!");
    }
  }
} else {
  console.log("No instruction found!");
};
