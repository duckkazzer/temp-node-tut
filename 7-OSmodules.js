const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);

//method return system uptime

console.log(`System Uptime is ${os.uptime()} seconds`);

const OsInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(OsInfo);
