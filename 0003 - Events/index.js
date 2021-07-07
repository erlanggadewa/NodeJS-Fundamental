// TODO 1
const { EventEmitter } = require("events");

// TODO 2
myEventEmitter = new EventEmitter();

// TODO 3
const birthdayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}!`);
};

myEventEmitter.on("HBD", birthdayEventListener);
// TODO 4
myEventEmitter.emit("HBD", { name: "Erlangga" });
