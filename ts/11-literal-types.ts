let testString = "hello world";
testString = "123";

const constantString = "hello world";

// constantString = "123"; //无法分配到 "constantString" ，因为它是常数。

let x: "hello" = "hello";
// x = "world"; // 不能将类型“"world"”分配给类型“"hello"”。

function printText(s: string, align: "left" | "right" | "center") {
  console.log(s, align);
}
printText("hello", "left");
// printText("hello", "left2"); // 类型“"left2"”的参数不能赋给类型“"left" | "right" | "center"”的参数。

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a === b ? 1 : -1;
}

interface Options {
  width: number;
}

function configure(x: Options | "auto") {
  console.log(x);
}

configure({
  width: 100,
});

configure("auto");
// configure("auto111"); // 类型“"auto111"”的参数不能赋给类型“Options | "auto"”的参数。

let b1: true = true;
// let b2: false = true; // 不能将类型“true”分配给类型“false”。

const obj = {
  count: 0,
};

if (true) {
  obj.count = 1;
}

function handleRequest(url: string, method: "GET" | "POST" | "PUT") {}
// const req = {
//   url: "https://example.com",
//   method: "GET" as "GET", // 1
// };
const req = {
  url: "https://example.com",
  method: "GET",
} as const; // 2

handleRequest(req.url, req.method); // 2。
handleRequest(req.url, req.method as "GET"); // 3。
// handleRequest(req.url, req.method as "GET"); // 类型“string”的参数不能赋给类型“"GET" | "POST" | "PUT"”的参数。
