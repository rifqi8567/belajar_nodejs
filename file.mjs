import fs from "fs";

const buffer = await fs.readFileSync("file.mjs");

console.info(buffer.toString());

fs.writeFileSync("temp.txt", "hello world");

