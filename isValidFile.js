const fs = require('fs');

function isFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      if (stats.isFile()) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

async function isValidFile(filePath) {
  return await isFile(filePath);
}

module.exports = { isValidFile };
