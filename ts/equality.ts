function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // 全等时类型必然相等，都是string
    x.toLocaleLowerCase();
    y.toLocaleLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

function pringAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // ...
    }
  }
}
