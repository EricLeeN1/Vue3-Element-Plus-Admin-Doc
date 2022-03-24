function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const arr = combine([1, 2, 3], [2, 3, 4]);
const arr1 = combine<number | string>([1, 2, 3], ["1"]); // 指定类型参数 不能将类型“string”分配给类型“number”。
