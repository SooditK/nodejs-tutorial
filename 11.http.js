const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  // res.write("Hello World");
  // res.end();

  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/about") {
    res.write("About Page");
    res.end();
  }
  res.end(`
    <h1>Ooops</h1>
    <p>You're lost senpai</p>
  `);
});

server.listen(5000);
