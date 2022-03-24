// 类型表达式

type GreetFunciton = (a: string) => void;

function greeter(fn: GreetFunciton) {
  fn("Hello,World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
