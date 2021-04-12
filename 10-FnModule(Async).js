const { readFile, writeFile } = require("fs");
// same as const fs = require("fs"); fs.readFileSync

console.log(`start`);
readFile("./haha/BigBoobs/text.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./haha/result-sync.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const two = result;
    writeFile(
      "./haha/result-async.txt",
      `Async Baby: ${first}, ${two}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`done with task`);
      }
    );
  });
});
console.log(`starting next task`);
