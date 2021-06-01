const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("Hello");
});

server.listen(8088, () => {
  console.log("This server is running at: \n\t http://localhost:8088/");
});