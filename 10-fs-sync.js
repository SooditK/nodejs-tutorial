const fs = require("fs");

const first = fs.readFileSync("./folder/first.txt", "utf-8");
const second = fs.readFileSync("./folder/second.txt", "utf-8");

console.log(first, second);

fs.writeFileSync("./folder/write.txt", `Result: ${first}, ${second}`);
