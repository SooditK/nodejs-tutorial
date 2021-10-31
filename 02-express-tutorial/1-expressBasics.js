const express = require("express");
const app = express();
// const app = require('express')();

//!most methods we use
//* app.get
//* app.post
//* app.put
//* app.delete
//* app.all
//* app.use - USED FOR MIDDLEWARES
//* app.listen

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("404 Page Not Found");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
