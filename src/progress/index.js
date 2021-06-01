/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-05-25 16:54:24
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-26 21:16:22
 */
const progress = require("progress");

const bar = new progress(":bar :percent :etas", { total: 100 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.completed) {
    clearInterval(timer);
  }
}, 100);
