const { logHelp } = require("./logHelp.js");
const { readFile } = require("./readFile.js");

function countNumberOfWords(filePath) {
    const wd = process.cwd();
    const path = `${wd}/${filePath}`;
    const data = readFile(path);
    const words = data.split(/\s+/);
    return words.length;
}

function logNumberOfWords(filePath) {
    try {
        const numWords = countNumberOfWords(filePath);
        console.log(numWords);
    } catch (err) {
        console.log(err.message);
        logHelp();
    }
}

module.exports = { logNumberOfWords, countNumberOfWords };
