// 泛型函数

// 传入参数与return存在对应关系，
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

firstElement<string>(["a", "b", "c"]);
firstElement([1, 2, 3]);
firstElement<undefined>([]); // 不能将类型“number”分配给类型“undefined”

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n: string) => parseInt(n));
