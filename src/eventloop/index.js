/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-05-27 10:22:51
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-27 15:36:08
 */

const bar = () => console.log("Bar");

const baz = () => console.log("Baz");

const foo = () => {
  console.log("Foo");
  // bar();

  setTimeout(() => {
    bar();
  }, 0);

  new Promise((resolve) => {
    resolve("应该在 Baz 之后， Bar 之前执行");
  }).then((resolve) => console.log(resolve));

  baz();

  process.nextTick(() => {
    console.log("nextTick");

    setTimeout(() => {
      console.log("nextTick timeout");
    }, 0);
  });
};

foo();
