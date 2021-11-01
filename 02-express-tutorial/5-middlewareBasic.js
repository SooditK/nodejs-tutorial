const express = require("express");
const app = express();
const logger = require("./6-logger");

const authorize = require("./7-authorize");

//! req => middleware => res

//? app.get(logger) is invoked in order
//TODO: app.use(logger);

app.use([authorize, logger]);

// const logger = (req,res,next) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     //* EITHER YOU TERMINATE HERE, OR YOU PASS-ON TO NEXT MIDDLEWARE
//     // res.send('Testing Home');
//     next();
// }

//! app.get('/', logger, (req,res) => {})
app.get("/", (req, res) => {
  // const method = req.method;
  // const url = req.url;
  // const time = new Date().getFullYear();
  // console.log(method, url, time);
  res.send("Home");
});

app.get("/about", (req, res) => {
  console.log(req.user);
  res.send("About");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
