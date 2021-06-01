/*
 * @Description: NodeJS 事件触发器
 * @Autor: Diviner
 * @Date: 2021-05-31 12:02:15
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-31 15:31:54
 */

const Events = require("events");

const emitter = new Events.EventEmitter();

emitter.on("start", (date) => {
  console.log("开始时间：", date);
});
emitter.emit("start", new Date().getTime());

emitter.on("range", (start, end) => {
  console.log(`范围： ${start} - ${end}`);
});
emitter.emit("range", 1, 100);
emitter.emit("range", 100, 200);

emitter.once("test", () => {
  console.log("我只会输出一次哦");
});
emitter.emit("test");
emitter.emit("test");
