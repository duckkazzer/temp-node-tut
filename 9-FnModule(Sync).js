const { readFileSync, writeFileSync } = require("fs");
// same as const fs = require("fs"); fs.readFileSync
console.log(`start`);
const first = readFileSync(`./haha/first.txt`, `utf-8`);
const second = readFileSync(`./haha/second.txt`, `utf-8`);
console.log(first, second);

writeFileSync(
  "./haha/result-sync.txt",
  `me the best numbers suck, Loosers:${first}, ${second}`
);
writeFileSync("./haha/BigBoobs/text.txt", `SecretBaby`, { flag: "a" });
//{flag: a} add to text to old
console.log(`done with this task`);
console.log(`starting with next one`);
