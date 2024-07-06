const { readFile } = require("./readFile.js");

function logHelp() {
    const wd = process.cwd();
    const path = `${wd}/help.txt`;
    const data = readFile(path);
    console.log(data);
}

module.exports = { logHelp };
