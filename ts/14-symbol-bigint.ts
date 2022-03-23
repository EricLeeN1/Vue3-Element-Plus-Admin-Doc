const oneHundred: bigint = BigInt(100);
const anotherHundred: bigint = 100n; // 目标低于 ES2020 时，bigInt 文本不可用。

const firstName = Symbol("name");
const secondName = Symbol("name");

// if (firstName === secondName) {
// 此条件将始终返回 "false"，因为类型 "typeof firstName" 和 "typeof secondName" 没有重叠。
// console.log("ok");
// }
