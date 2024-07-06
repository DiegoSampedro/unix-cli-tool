const { getBytes } = require("./bytes.js");
const { countNumberOfLines } = require("./numberOfLines.js");
const { countNumberOfWords } = require("./numberOfWords.js");
const { logHelp } = require("./logHelp.js");

async function logAllInfo(filePath) {
    try {
        const bytes = getBytes(filePath);
        const lines = await countNumberOfLines(filePath);
        const words = countNumberOfWords(filePath);

        console.log(`${lines}   ${words}   ${bytes}   ${filePath}`);
    } catch (err) {
        console.log(err.message);
        logHelp();
    }
    
}

module.exports = { logAllInfo };