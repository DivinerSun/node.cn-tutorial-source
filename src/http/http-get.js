/*
 * @Description: NodeJS发送http请求 - get
 * @Autor: Diviner
 * @Date: 2021-05-31 16:02:16
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-31 16:10:16
 */

const https = require("https");

const options = {
  hostname: "test.guozikeji.com",
  port: 443,
  path: "/newdeparture/app/cart/getCartNum",
  method: "get",
  headers: {
    Authentication:
      "BGADYgNmWmFRNQNrUTUKYQc_BTYAY1E9UD0AK1I9WzIJbABlUT4NNlQoUnpSagw/VzIOYQ==",
  },
};

const req = https.request(options, (res) => {
  console.log(`状态码： ${res.statusCode}`);

  res.on("data", (data) => {
    process.stdout.write(data);
  });
});

req.on("error", (e) => {
  console.log(`请求出错了： ${e}`);
});

req.end();
