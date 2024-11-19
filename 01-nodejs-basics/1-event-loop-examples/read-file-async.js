const { readFile } = require("fs");

console.log("started a first task");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first Task");
});

console.log("starting next task");
readFile("./content/second.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Completed the Second task");
});
