/*
 * @Description: NodeJS发送http请求 - post
 * @Autor: Diviner
 * @Date: 2021-05-31 16:12:19
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-31 16:17:16
 */

const https = require("https");

const data = JSON.stringify({
  goodsId: 95,
  num: 1,
});

const options = {
  hostname: "test.guozikeji.com",
  port: 443,
  path: "/newdeparture/app/cart/addGoodsToCart",
  method: "post",
  headers: {
    "Content-Type": "application/json",
    Authentication:
      "BGADYgNmWmFRNQNrUTUKYQc_BTYAY1E9UD0AK1I9WzIJbABlUT4NNlQoUnpSagw/VzIOYQ==",
  },
  data,
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

req.write(data);
req.end();
