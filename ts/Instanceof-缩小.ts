function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toLocaleLowerCase);
  }
}
console.log(new Date());
console.log("Hello Ts");
