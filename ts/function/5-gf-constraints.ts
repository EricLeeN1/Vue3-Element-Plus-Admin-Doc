function longest<T extends { length: number }>(a: T, b: T) {
  // 限制了传入的a,b的类型一定要有length属性
  if (a.length >= b.length) {
    // 不加限制条件的话类型“T”上不存在属性“length”。
    return a;
  }
  return b;
}

const longerArray = longest([1, 2], [2, 3, 4]);
const longerString = longest("eric", "lee");
const longerNumber = longest(10, 100); // 类型“number”的参数不能赋给类型“{ length: number; }”的参数。
