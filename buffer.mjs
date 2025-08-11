// const buffer = Buffer.from("Eko");
// console.info(buffer.toString());

// buffer.reverse();
// console.info(buffer.toString());
// console.info(buffer)

const buffer = Buffer.from("Muhammad rifqi thufail fahmi", "utf-8");

console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const buffer2 = Buffer.from("TXVoYW1tYWQgcmlmcWkgdGh1ZmFpbCBmYWhtaQ==", "base64url");

console.info(buffer2.toString("utf-8"));