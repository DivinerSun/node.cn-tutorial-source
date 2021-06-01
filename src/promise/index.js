/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-05-27 17:34:08
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-29 19:43:24
 */

const status = ["SUCCESS", "FAILED"];
const foo = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 100) % 2;
  if (status[i] === "SUCCESS") {
    resolve("成功了");
  } else {
    reject("失败了");
  }
});
foo
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
