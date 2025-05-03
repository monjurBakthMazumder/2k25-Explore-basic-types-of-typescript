"use strict";
{
    // --- Nullable, Unknown, and Never Types in TypeScript ---
    // ---------- NULLABLE TYPE ----------
    // Function to simulate a search action; accepts a string or null
    const searchByName = (name) => {
        if (name) {
            console.log("Searching for:", name);
        }
        else {
            console.log("No name provided to search.");
        }
    };
    searchByName(null); // Output: No name provided to search.
    searchByName("Monjur"); // Output: Searching for: Monjur
    // ---------- UNKNOWN TYPE ----------
    // A function to convert speed from km/h to m/s, handles both number and string inputs
    const convertSpeedToMeterPerSecond = (speed) => {
        if (typeof speed === "number") {
            const convertedSpeed = (speed * 1000) / 3600;
            console.log(`Speed: ${convertedSpeed} m/s`);
        }
        else if (typeof speed === "string") {
            const [valueAsString] = speed.split(" ");
            const numericValue = parseFloat(valueAsString);
            const convertedSpeed = (numericValue * 1000) / 3600;
            console.log(`Speed: ${convertedSpeed} m/s`);
        }
        else {
            console.log("Invalid speed input type.");
        }
    };
    convertSpeedToMeterPerSecond(1000); // Output: Speed: 277.777... m/s
    convertSpeedToMeterPerSecond("1500 km/h"); // Output: Speed: 416.666... m/s
    convertSpeedToMeterPerSecond(true); // Output: Invalid speed input type.
    // ---------- NEVER TYPE ----------
    // Function that always throws an error; used for unreachable code or fatal errors
    const handleCriticalError = (errorMessage) => {
        throw new Error(errorMessage);
    };
    // Uncommenting the line below will terminate the program execution with an error
    handleCriticalError("Critical system failure occurred!");
}
