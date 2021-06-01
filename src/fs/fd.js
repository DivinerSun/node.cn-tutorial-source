/*
 * @Description: NodeJS文件描述符
 * @Autor: Diviner
 * @Date: 2021-05-31 17:11:52
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-31 18:10:23
 */

const fs = require("fs");
const path = require("path");

fs.open(path.join(__dirname, "../http/base.js"), "r", (err, fd) => {
  if (!err) {
    console.log("文件描述符：", fd);
  } else {
    console.log("出错了：", err);
  }
});

const getFileSize = (size) => {
  if (size < 1024) {
    return `${size}Byte`;
  }
  if (size >= 1024 && size < 1024 * 1024) {
    return `${Math.fround(size / 1024).toFixed(2)}KB`;
  }
  if (size >= 1024 * 1024 && size < 1024 * 1024 * 1024) {
    return `${Math.fround(size / (1024 * 1024)).toFixed(2)}MB`;
  }
  if (size >= 1024 * 1024 * 1024 && size < 1024 * 1024 * 1024 * 1024) {
    return `${Math.fround(size / (1024 * 1024)).toFixed(2)}GB`;
  }
};

const filePath = path.join(__dirname, "../http/base.js");

fs.stat(filePath, (err, stats) => {
  if (!err) {
    console.log(
      "Stats: ",
      stats,
      stats.isBlockDevice(),
      stats.isCharacterDevice(),
      stats.isDirectory(),
      stats.isFIFO(),
      stats.isFile(),
      stats.isSocket(),
      stats.isSymbolicLink(),
      "\n文件大小：",
      getFileSize(stats.size)
    );
  } else {
    console.log("出错了：", err);
  }
});

const p1 = "https://www.guozikeji.com/";
const p2 = "/h5/test/getInfo";

console.log({
  dirname: path.dirname(filePath),
  basename: path.basename(filePath),
  extname: path.extname(filePath),
  isAbsolute: path.isAbsolute(filePath),
  delimiter: path.delimiter,
  posix: path.posix,
  sep: path.sep,
  win32: path.win32,
  join: path.join(p1, p2),
  resolve: path.resolve(p1, p2),
  normalize: path.normalize(p1, p2),
});
