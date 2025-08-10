import os from "os"

console.info(os.platform());
console.table(os.cpus());

function samplePromise() {
    return Promise.resolve("RIfqi");
}

const name = await samplePromise();
console.info(name)

console.info(os.platform());
console.info(os.arch());
console.table(os.cpus());
console.info(os.uptime());
console.info(os.totalmem());
console.info(os.freemem());
console.info(os.networkInterfaces());