import readline from "readline";
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Siapa nama anda?: ", function (nama) {
    console.info(`Hello ${nama}`);
    input.close();
});
