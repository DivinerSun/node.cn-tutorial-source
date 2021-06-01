/*
 * @Description: Async-Await
 * @Autor: Diviner
 * @Date: 2021-05-31 11:19:07
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-31 12:00:50
 */

// callback -----> promise(ES2015/ES6) -----> async/await(ES2017)

const doAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Do Something");
    }, 2000);
  });
};

const theDo = async () => {
  const res = await doAsync();
  console.log(res);
};
theDo();

const aFun = async () => {
  return "这是一个异步函数";
};

console.log("直接调用", aFun());
