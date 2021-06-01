/*
 * @Description: NodeJS写入文件
 * @Autor: Diviner
 * @Date: 2021-05-31 19:39:27
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-31 20:17:59
 */

const fs = require("fs");
const path = require("path");

// 异步写入文件
const writeFile = (filePath, data) => {
  fs.writeFile(filePath, data, { flag: "a+" }, (err) => {
    if (err) {
      console.log("「writeFile」文件写入失败：", err);
      return;
    }
    console.log("「writeFile」文件写入成功");
  });
};

// 同步写入文件
const writeFileSync = (filePath, data) => {
  try {
    const result = fs.writeFileSync(filePath, data, { flag: "a+" });
    if (!result) {
      console.log("「writeFileSync」文件写入成功", result);
    }
  } catch (e) {
    console.log("「writeFileSync」文件写入失败", e);
  }
};

const filePath = path.join(__dirname, "write.txt");
writeFile(filePath, "writeFile写入的内容\n");
writeFileSync(filePath, "writeFileSync写入的内容\n");
