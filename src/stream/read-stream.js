/*
 * @Description: NodeJS - 创建可读流
 * @Autor: Diviner
 * @Date: 2021-06-01 15:42:15
 * @LastEditors: Diviner
 * @LastEditTime: 2021-06-01 15:52:48
 */

const Stream = require("stream");

class ReadableStream extends Stream.Readable {
  read() {
    console.log(1111111, this);
  }
}

const readableStream = new ReadableStream();

const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString(), encoding);
  next();
};

readableStream.pipe(writableStream);

readableStream.push("hi!");
readableStream.push("ho!");

writableStream.end();
