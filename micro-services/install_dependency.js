const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const directory = ".";
const commandExecNode = process.argv[2]; //command for install all libraries

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (!fs.lstatSync(path.join(__dirname, file)).isDirectory()) {
      return;
    }

    if (fs.existsSync(path.join(__dirname, file, "package.json"))) {
      var command = `cd ${directory}/${file} && ${commandExecNode}`;
    }

    if (command === null) {
      return;
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      stdout ? console.log(`stdout: ${stdout}`) : "";
      stderr ? console.log(`stderr: ${stderr}`) : "";
    });
  });
});
