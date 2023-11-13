const fs = require('fs');

// Specify the path to your log file
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
      return;
    }

    // Split the log file content into lines
    const lines = data.split('\n');

    // Iterate through each line
    lines.forEach(line => {
      // Check if the line contains the specified keyword
      if (line.toLowerCase().includes(keyword.toLowerCase())) {
        // If the keyword is found, log the line to the console (you can customize this part)
        console.log(`Keyword found in log: ${line}`);
      }
    });
  });
}
