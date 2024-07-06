const { logHelp } = require("./logHelp.js");
const { readFile } = require("./readFile.js");

function getBytes(filePath) {
    const wd = process.cwd();
    const path = `${wd}/${filePath}`;
    const data = readFile(path);
    return Buffer.byteLength(data);
}

function logBytes(filePath) {
    try {
        const len = getBytes(filePath);
        console.log(len);
    } catch (err) {
        console.log(err.message);
        logHelp();
    }
}

module.exports = { logBytes, getBytes };
