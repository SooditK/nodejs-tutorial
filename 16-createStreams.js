//! streams are used to read and write sequentially
//* writable streams
//* readable streams
//* duplex streams
//* transform streams

const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync(`./folder/third.txt`, `Hello World ${i}`, { flag: "a" });
}
