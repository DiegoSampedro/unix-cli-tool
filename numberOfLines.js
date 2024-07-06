const { logHelp } = require("./logHelp.js");
const fs = require("fs");

function countNumberOfLines(filePath) {
    const wd = process.cwd();
    const path = `${wd}/${filePath}`;

    return new Promise(resolve => {
        let i;
        let count = 0;
        fs.createReadStream(path)
        .on('data', (chunk) => {
            for (i = 0; i < chunk.length; ++i) {
                if (chunk[i] == 10) count++;
            }
        })
        .on('end', () => {
            resolve(count);
        });
    });
}

async function logNumberOfLines(filePath) {
    try {
        const count = await countNumberOfLines(filePath);
        console.log(count);
    } catch (err) {
        console.log(err.message);
        logHelp();
    }
}

module.exports = { logNumberOfLines, countNumberOfLines };
