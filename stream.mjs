import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Rifqi");
writer.write("Thufail");
writer.write("Fahmi");
writer.close();

const reader = fs.createReadStream("target.log");
reader.on("data", function (data) {
    console.info(data.toString());
    reader.close();
})