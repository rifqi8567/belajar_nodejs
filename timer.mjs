import timers from "timers/promises";

// setInterval(() => {
//     console.info(`Timer at ${new Date()}`);
// }, 1000);

//timer promise
for await (const startTime of timers.setInterval(2000, new Date())) {
    console.info(`Start Timer at ${new Date()}`);
}

console.info(new Date());
const name = await timers.setTimeout(500, "Rifqi");
console.info(new Date());
console.info(name);