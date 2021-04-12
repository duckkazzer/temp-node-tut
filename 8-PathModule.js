const path = require("path");
console.log(path.sep);

const base = path.basename("/haha/BigBoobs/text.txt");
console.log(base);

const absolute = path.resolve(__dirname, "haha", "BigBoobs", "text.txt");
console.log(absolute);
