const fs = require("fs");
const path = require("path");
const child_process = require("child_process");

const directory = ".";
const commandExec = "pnpm i";

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  files.forEach((folder) => {
    if (!fs.lstatSync(path.join(__dirname, folder)).isDirectory()) {
      return;
    }

    if (!fs.existsSync(path.join(__dirname, folder, "package.json"))) {
        return;
    }

    const command = `cd ${directory}/${folder} && ${commandExec}`;
    child_process.exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      stderr ? console.log(`stderr: ${stderr}`) : "";
      stdout ? console.log(`stdout: ${stdout}`) : "";
    });
  });
});
