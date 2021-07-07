const fs = require("fs");
const path = require("path");

const fileReadCallback = (error, data) => {
  if (error) return console.log("Gagal Membaca Berkas");
  console.log(data);
};

fs.readFile(path.resolve(__dirname, "note.txt"), "UTF-8", fileReadCallback);
