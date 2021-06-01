/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-05-27 16:22:10
 * @LastEditors: Diviner
 * @LastEditTime: 2021-05-27 17:32:32
 */

const JSDOM = require("jsdom").JSDOM;

const window = new JSDOM().window;
const document = window.document;

// 回调
const btn = document.createElement("button");
btn.id = "btn";
btn.addEventListener("click", () => {
  console.log("按钮被点击了");
});
setTimeout(() => {
  btn.click();
}, 2000);

document.addEventListener("load", () => {
  console.log("文档加载完成！");
});

const XMLHttpRequest = window.XMLHttpRequest;
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    console.log(xhr.response);
    xhr.status === 200
      ? console.log(xhr.statusText)
      : console.log("请求出岔子了");
  }
};
xhr.open(
  "GET",
  "https://test.guozikeji.com/newdeparture/app/order/getOfflineAvailableCouponList?1=1&hospitalId=2&price=100"
);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader(
  "Authentication",
  "CW1RMAdhWGhWNVM8BmkKYFNnDz9XNVQxBWhWfQBvWzJTNl84WD5cZAJ_BCwHPw49A2YBbg=="
);
xhr.send();
