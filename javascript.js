const fs = require('fs');

const logFilePath = 'path/to/your/logfile.log';

// Specify the keyword to monitor in the log file
const keywordToMonitor = 'error';

// Monitor the log file
monitorLogFile(logFilePath, keywordToMonitor);

function monitorLogFile(logFilePath, keyword) {
  // Read the log file asynchronously
  fs.readFile(logFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading log file: ${err.message}`);
      r
