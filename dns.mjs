import dns from "dns/promises";

// function callback(error, ip) {
//     console.info(ip);
// }

// dns.lookup("https://rifqi-dev.netlify.app", callback);

const addres = await dns.lookup("rifqi-dev.netlify.app");
console.info(addres.address);
console.info(addres.family);