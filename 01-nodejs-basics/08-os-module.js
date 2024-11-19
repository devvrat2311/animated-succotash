const os = require('os');

// info about the current user

const user = os.userInfo();
console.log(user);

console.log(`the system uptime is ${Math.floor(os.uptime() / 3600)} hours`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);
