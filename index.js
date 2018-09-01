const http = require("http");
const fs = require("fs");
const url = require("url");

console.log("Started NodeJS Web Server - Primitive Age");

http
  .createServer(function(req, res) {
    const q = url.parse(req.url, true);
    let filename = q.pathname == "/" ? "/index.html" : q.pathname;
    filename = "." + filename;

    switch (req.method) {
      case "GET":
        switch (q.pathname) {
          case "/favicon.ico":
            console.log("favicon");

            fs.readFile("." + q.pathname, function name(err, data) {
              console.log("favicon");

              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(data);
              return res.end();
            });
            break;
          case "/login":
            fs.readFile("." + q.pathname + ".html", function name(err, data) {
              console.log("favicon");

              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(data);
              return res.end();
            });
            break;
          default:
            break;
        }

      case "POST":
        switch (q.pathname) {
          case "/login":
            console.log(req);
            break;
          case "/signup":
            break;

          default:
            break;
        }
        break;
      default:
        break;
    }
  })
  .listen(8080);
