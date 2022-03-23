function pringAll(strs: string | string[] | null) {
  if (strs) {
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

function multiplyAll(values: number[] | undefined, factor: number) {
  if (!values) {
    return values;
  } else {
    return values.map((x) => {
      return x * factor;
    });
  }
}

multiplyAll([3, 4], 2);
multiplyAll(undefined, 2);
