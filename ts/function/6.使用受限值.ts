// function minimumLength<T extends { length: number }>(
//   obj: T,
//   minimum: number
// ): T {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum }; // 不能将类型“{ length: number; }”分配给类型“T”。 "{ length: number; }" 可赋给 "T" 类型的约束，但可以使用约束 "{ length: number; }" 的其他子类型实例化 "T"。
//   }
// }

// const arr = minimumLength([1, 2, 3], 6);
// console.log(arr.slice(0));
