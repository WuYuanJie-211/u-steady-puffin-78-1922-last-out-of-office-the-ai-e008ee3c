const fs = require("fs");

const line = "I'm out of office — I quit the inbox to run the espresso machine on 5th Street. Resend anything urgent as a coffee order, or it comes back decaf. No refills, no replies, just steam.";

function fail(message) {
  throw new Error(message);
}

if (typeof line !== "string") {
  fail("entry must be a string");
}

if (line.length < 1 || line.length > 280) {
  fail("entry must be 1-280 characters, got " + line.length);
}

if (line !== line.trim()) {
  fail("entry must not have leading or trailing whitespace");
}

if (line.includes("\n") || line.includes("\r")) {
  fail("entry must be exactly one line");
}

if (line.split("\n").length !== 1) {
  fail("entry must be exactly one line");
}

const roundTrip = Buffer.from(line, "utf8").toString("utf8");
if (roundTrip !== line) {
  fail("entry failed UTF-8 round-trip");
}

for (const ch of line) {
  if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
    fail("entry must not contain control characters");
  }
}

if (Buffer.byteLength(line, "utf8") < line.length) {
  fail("entry byte length is shorter than its character length");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
fs.chmodSync("/output/entry.txt", 0o644);

const mode = fs.statSync("/output/entry.txt").mode & 0o777;
if (mode !== 0o644) {
  fail("entry.txt mode must be 0644, got " + mode.toString(8));
}

const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  fail("written entry does not match the line");
}

console.log("wrote /output/entry.txt (" + line.length + " chars)");
