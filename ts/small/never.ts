// never type
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sidelength: number;
}
interface Triangle {
  kind: "triangle";
  sidelength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sidelength * shape.sidelength;
    default:
      // 做一些穷尽性检查
      const _exhaustiveCheck: never = shape; // 不能将类型“Triangle”分配给类型“never”。
      return _exhaustiveCheck;
  }
}
