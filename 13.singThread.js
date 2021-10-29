const { readFile } = require("fs");

console.log("started first task");
//CHECK FILE PATH
readFile("./folder/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log("completed first task");
});

console.log("starting next task");
