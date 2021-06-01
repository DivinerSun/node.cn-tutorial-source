/*
 * @Description: NodeJS操作系统模块
 * @Autor: Diviner
 * @Date: 2021-05-31 20:42:37
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-31 21:02:49
 */

const os = require("os");

console.log("当前系统架构标识：", os.arch());
console.log("当前系统CPU信息：", os.cpus());
console.log("大端序/小端序：", os.endianness());
console.log(
  "当前系统可用内存：",
  `${(os.freemem() / Math.pow(1024, 3)).toFixed(2)}GB`
);
console.log(
  "当前系统总内存：",
  `${(os.totalmem() / Math.pow(1024, 3)).toFixed(2)}GB`
);
console.log("当前用户主目录：", os.homedir());
console.log("当前系统主机名称：", os.hostname());
console.log("当前系统平均负载：", os.loadavg());
console.log("当前系统平台信息：", os.platform());
console.log("当前系统用户信息：", os.userInfo());
console.log("版本号：", os.version());
console.log("当前系统网络接口：", os.networkInterfaces());
