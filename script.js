#! /home/diegosampedro/.nvm/versions/node/v18.17.0/bin/node   // add here the path to node

const { logAllInfo } = require("./allInfo.js");
const { logHelp } = require("./logHelp.js");
const { isValidFile } = require("./isValidFile.js");
const { logBytes } = require("./bytes.js");
const { logNumberOfLines } = require("./numberOfLines.js");
const { logNumberOfWords } = require("./numberOfWords.js");

const args = process.argv.slice(2);

if (!args.length || ["-h", "-help"].includes(args[0])) {
    logHelp();
    return;
}

if (isValidFile(args[0])) {
    logAllInfo(args[0]);
    return;
}

const filePath = args[1];

if (!isValidFile(filePath)) {
    console.error("Invalid file path");
    return;
}

if (args[0] === "-c") {
    logBytes(filePath);
    return;
}

if (args[0] === "-l") {
    logNumberOfLines(filePath);
    return;
}

if (args[0] === "-w") {
    logNumberOfWords(filePath);
    return;
}

logHelp();
