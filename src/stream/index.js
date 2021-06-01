/*
 * @Description: NodeJS - 流
 * @Autor: Diviner
 * @Date: 2021-06-01 10:53:15
 * @LastEditors: Diviner
 * @LastEditTime: 2021-06-01 15:31:02
 */

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // 文件读取的方式
  // fs.readFile(`${__dirname}/test.txt`, (err, data) => {
  //   if (err) {
  //     console.log("读取文件异常");
  //     return;
  //   }

  //   res.setHeader("Content-Type", "application/json;charset=utf8");

  //   res.end(data);
  // });

  // 使用流的方式
  const stream = fs.createReadStream(`${__dirname}/test.txt`);
  res.setHeader("Content-Type", "application/json;charset=utf8");
  stream.pipe(res);
});

server.listen(8088, () => {
  console.log("The server is running at: \n\thttp://localhost:8088");
});
