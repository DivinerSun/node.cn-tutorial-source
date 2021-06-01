/*
 * @Description: NodeJS - Buffer
 * @Autor: Diviner
 * @Date: 2021-06-01 09:47:50
 * @LastEditors: Diviner
 * @LastEditTime: 2021-06-01 10:49:14
 */

// 创建buffer
const buf1 = Buffer.from("Hello Buffer");
const buf2 = Buffer.alloc(10, "Hello Buffer");
const buf3 = Buffer.allocUnsafe(10);

console.table({
  buf1,
  buf2,
  buf3,
  buf1Str: buf1.toString(),
  buf2Str: buf2.toString(),
  buf3Str: buf3.toString(),
});

// copy
const bufCopy = Buffer.alloc(5);
buf1.copy(bufCopy, 0, 0, 6);
console.log("bufCopy: ", bufCopy.toString());
