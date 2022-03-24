function padLeft(padding: number | string, input: string): string {
  // return new Array(padding + 1).join(" ") + input; // 运算符“+”不能应用于类型“string | number”和“number”
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}

function pringAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (let index = 0; index < strs.length; index++) {
      const element = strs[index];
      console.log(element);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // ...
  }
}

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor;
  }
}
multiplyValue({ value: 5 }, 6);
multiplyValue({ value: undefined }, 6);
