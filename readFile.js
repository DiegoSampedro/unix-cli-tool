const fs = require('fs');

function readFile(filePath) {
    const data = fs.readFileSync(filePath);
    return data.toString();
}

module.exports = { readFile };
