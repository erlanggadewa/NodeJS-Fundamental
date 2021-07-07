const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(
  path.resolve(__dirname, "input.txt"),
  { highWaterMark: 15 }
);

const writableStream = fs.createWriteStream(
  path.resolve(__dirname, "output.txt")
);

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    console.log(error);
  }
});
readableStream.on("end", () => writableStream.end("SELESAI"));
