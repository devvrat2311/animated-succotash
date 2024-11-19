const express = require("express");
const path = require("path");
console.log("Someone visited the home page");

const app = express();

//serve static files from the react app
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// app.get("/home", (req, res) => {
//   console.log("Someone visited the home page");
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// app.get("/about", (req, res) => {
//   console.log("Someone visited the about page");
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// app.get("/blogs", (req, res) => {
//   console.log("Someone visited the blogs page");
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// app.get("/projects", (req, res) => {
//   console.log("Someone visited the projects page");
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
