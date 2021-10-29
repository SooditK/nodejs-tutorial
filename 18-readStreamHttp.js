var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    //   const text = fs.createReadStream("./folder/third.txt","utf-8");
    //   res.end(text);
    const fileStream = fs.createReadStream("./folder/third.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(8080);
