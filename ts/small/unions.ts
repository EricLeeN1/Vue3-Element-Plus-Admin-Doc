// // 受歧视的unions
// interface Circle {
//   kind: "circle";
//   radius: number;
// }
// interface Square {
//   kind: "square";
//   sidelength: number;
// }

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sidelength * shape.sidelength;
//   }
// }
