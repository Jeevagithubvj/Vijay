import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class LogMonitor {

    public static void main(String[] args) {
        // Specify the path to your log file
        String logFilePath = "path/to/your/logfile.log";

        // Specify the keyword to monitor in the log file
        String keywordToMonitor = "error";

        // Monitor the log file
        monitorLogFile(logFilePath, keywordToMonitor);
    }

    private static void monitorLogFile(String logFilePath, String keyword) {
        try {
            // Create a Scanner to read the log file
            Scanner scanner = new Scanner(new File(logFilePath));

            // Read the log file line by line
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();

                // Check if the line contains the specified keyword
                if (line.toLowerCase().contains(keyword.toLowerCase())) {
                    // If the keyword is found, print the line to the console (you can customize this part)
                    System.out.println("Keyword found in log: " + line);
                }
            }

            // Close the scanner
            scanner.close();
        } catch (FileNotFoundException e) {
            System.err.println("Log file not found: " + logFilePath);
            e.printStackTrace();
        }
    }
}
