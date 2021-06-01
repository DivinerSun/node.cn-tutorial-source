/*
 * @Description: 最简单的http服务器
 * @Autor: Diviner
 * @Date: 2021-05-31 15:38:12
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-31 15:45:50
 */

const http = require("http");

const host = "localhost";
const port = 8088;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      name: "NodeJS",
      version: "14.15.5",
      say: "Hello World!",
    })
  );
});

server.listen(port, () => {
  console.log(`The server is running at: \n\thttp://${host}:${port}`);
});
