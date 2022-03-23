初始化 tsconfig 文件

```
 tsc --init
```

自动编译 ts 文件

```
 tsc --watch
```

```接口扩展
interface Animal {
  name: string
}
interface Bear extends Animal{
  bear: boolean
}
```

```类型扩展
type Animal = {
  name: string
}
type Bear  = Animal & {
  bear: boolean
}
```

```通过多次定义一个接口可添加字段
interface Animal {
  name: string
}
interface Animal {
  count: number
}
```

```会报错，类型创建后不能更改
type Animal = {
  name: string
}
type Animal = {
  count: number
}
```

类型断言

```javascript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
const x = ("hello" as unknown) as number;

```

```
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

```
