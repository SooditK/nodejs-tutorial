const EventEmitter = require("events");

const customEmitter = new EventEmitter();
//! ON
//! EMIT
customEmitter.on("response", () => {
  console.log("data recieved");
});

customEmitter.emit("response");

customEmitter.on("response", () => {
  console.log("new data recieved");
});
