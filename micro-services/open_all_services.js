const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const directory = ".";
const commandExecNode = "npm start";

fs.readdir(directory, (err, files) => {
  files.forEach((file) => {
    if (err) throw err;

    if (!fs.lstatSync(path.join(__dirname, file)).isDirectory()) {
      return;
    }

    if (fs.existsSync(path.join(__dirname, file, "package.json"))) {
      var command = `cd ${file} && ${commandExecNode}`;
    }

    if (command === null) {
      return;
    }

    exec(`start cmd.exe /k "${command}"`);
    delete command;
  });
});
