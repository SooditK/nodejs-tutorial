const express = require("express");
const app = express();
const path = require("path");
// const app = require('express')();

//? setup static and middlewares
//? express.static here is a built-in middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
  // res.sendFile(path.join(__dirname, "./navbar-app/index.html"));
  res.json([{ name: "John" }, { name: "Doe" }]);
});

app.get("*", (req, res) => {
  res.status(404).send("404 Page Not Found");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
