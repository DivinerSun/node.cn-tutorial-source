/*
 * @Description: NodeJS读文件
 * @Autor: Diviner
 * @Date: 2021-05-31 19:24:08
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-31 19:38:58
 */

const fs = require("fs");
const path = require("path");

// 异步读取文件
const readFile = (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("「readFile」文件读取失败： ", err);
      return;
    }
    console.log("「readFile」文件内容: ", data);
  });
};

// 同步读取文件
const readFileSync = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log("「readFileSync」文件内容： ", data);
  } catch (e) {
    console.log("「readFileSync」文件读取失败： ", e);
  }
};

const filePath = path.join(__dirname, "read.txt");
readFile(filePath);
readFileSync(filePath);
