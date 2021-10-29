// console.log('Express Tutorial')
const { readFileSync } = require("fs");
const http = require("http");

const homepage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  //   console.log("Express Tutorial");
  //   res.end("Hello World");
  //   console.log(req.url);
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("<h1>Hello World</h1>");
  //   res.end();
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homepage);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
