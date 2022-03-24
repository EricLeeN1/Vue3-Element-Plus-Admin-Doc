// class Ctor {
//   s: string;
//   constructor(s: string) {
//     this.s = s;
//   }
// }

// type SomeConstructor = {
//   new (s: string): Ctor;
// };

// function fn(ctor: SomeConstructor) {
//   return new ctor("hello");
// }

// const f = fn(Ctor);
// console.log(f.s);

interface CallOrConstructor {
  new (s: string): Date; // 构造签名的方式
  (n: number): number; // 调用签名的方式
}

function fn(date: CallOrConstructor) {
  let d = new Date("2022-03-20");
  let n = date(100);
}
