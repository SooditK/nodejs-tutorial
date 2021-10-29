const { createReadStream } = require("fs");

const stream = createReadStream("./folder/third.txt");

stream.on("data", (result) => {
  console.log(result);
});
