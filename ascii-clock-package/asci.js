const readline = require("readline");

// ASCII digits 0-9
const digits = [
  [" __ ", "|  |", "|__|"], // 0
  ["    ", "   |", "   |"], // 1
  [" __ ", " __|", "|__ "], // 2
  [" __ ", " __|", " __|"], // 3
  ["    ", "|__|", "   |"], // 4
  [" __ ", "|__ ", " __|"], // 5
  [" __ ", "|__ ", "|__|"], // 6
  [" __ ", "   |", "   |"], // 7
  [" __ ", "|__|", "|__|"], // 8
  [" __ ", "|__|", " __|"]  // 9
];

// Function to convert a time string (HHMMSS) to ASCII
function timeToAscii(timeStr) {
  let lines = ["", "", ""];
  for (let char of timeStr) {
    if (char === ":") {
      lines[0] += "   ";
      lines[1] += " . ";
      lines[2] += " . ";
    } else {
      let num = parseInt(char);
      lines[0] += digits[num][0] + " ";
      lines[1] += digits[num][1] + " ";
      lines[2] += digits[num][2] + " ";
    }
  }
  return lines.join("\n");
}

// Function to clear the console
function clearConsole() {
  process.stdout.write("\x1Bc"); // ANSI escape code to clear terminal
}

// Update clock every second
setInterval(() => {
  const now = new Date();
  const timeStr = now
    .toTimeString()
    .split(" ")[0] // get HH:MM:SS
    .replace(/:/g, ":"); // keep colons

  clearConsole();
  console.log("🕒 ASCII Art Clock\n");
  console.log(timeToAscii(timeStr));
}, 1000);
// ... my existing code ...

// Add these lines at the very end:
module.exports = {
  timeToAscii,
  clearConsole
};