# File Information Utility

This Node.js script, `script.js`, serves as a command-line utility (my own version of the Unix command line tool wc!) for displaying various pieces of information about a file. It leverages multiple modules to provide detailed analytics, such as byte size, number of lines, and number of words in the file.

## Features
    Print  newline,  word, and byte counts for a FILE.

    The options below may be used to select which counts are printed, always in the following order: newline, word, byte.

    -c [file path]
            print the byte counts

    -l [file path]
            print the newline counts

    -w [file path]
            print the word counts

    [file path]
            prints the word count, new lines count and the byte count

    -help, -h,  display this help and exit

## Modules

The utility is modular, with each piece of functionality encapsulated in its own file:

- **`allInfo.js`**: Aggregates information from other modules and displays it.
- **`logHelp.js`**: Provides help information to the user.
- **`isValidFile.js`**: Checks if the provided path points to a valid file.
- **`bytes.js`**: Calculates and logs the file size in bytes.
- **`numberOfLines.js`**: Counts and logs the number of lines in the file.
- **`numberOfWords.js`**: Determines and logs the number of words in the file.

## Usage

To use this utility, run it from the command line with Node.js, followed by the desired option or the path to the file you wish to analyze. For example:

- Display help information: `node script.js -h`
- Log word count: `node script.js -w file.txt`
- Log line count: `node script.js -l file.txt`
- Log byte count: `node script.js -c file.txt`
- Log all information: `node script.js file.txt`

Ensure that the path to the Node.js executable in the shebang line at the top of `script.js` matches your system's configuration.

## Dependencies

- Node.js: The runtime environment required to execute this utility.

## Note

This README provides a high-level overview of the utility's functionality.