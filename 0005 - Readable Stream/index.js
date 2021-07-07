const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(
  path.resolve(__dirname, "read.txt"),
  { highWaterMark: 10 }
);

// ! createReadStream() return EventEmitter, where we can set listener function every times readable event is invoked.
readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("DONE");
});
