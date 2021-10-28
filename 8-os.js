const os = require("os");

//! INFO ABOUT CURRENT USER
console.log(os.userInfo());

console.log(os.uptime());

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
