/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-05-27 15:40:56
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-27 15:58:27
 */

// 基础定时器
setTimeout(() => {
  console.log("延时2秒");
}, 2000);

setTimeout(() => {
  console.log("延时50毫秒");
}, 50);

// 可传参定时器
const myTimer = (firstParam, secondParam) => {
  console.log("myTimer: ", firstParam, secondParam);
};
setTimeout(myTimer, 2000, "Jack", "Diviner", "Thrid");

// 定时器的返回值
const id = setTimeout(() => {
  console.log("定时器返回值", id);
}, 5000);
console.log("返回值: ", id);

// 清除定时器
clearTimeout(id);
