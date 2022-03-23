---
title: TypeScript
author: ErciLee
date: "2022-3-16"
---

## 一、TypeScript 开发环境搭建

### 1. 安装 Node.js 环境（略过）

### 2. 使用 Npm 全局安装 TypeScript

```shell
npm i -g typescript
```

### 3. 使用 tsc 对 ts 文件进行编译

进入 ts 所在文件目录

```shell
tsc name.ts
```

## 二、tsconfig.json

```json
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "esnext", // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "esnext", // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [], // 指定要包含在编译中的库文件
    "allowJs": true, // 允许编译 javascript 文件
    "checkJs": true, // 报告 javascript 文件中的错误
    "jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true, // 生成相应的 '.d.ts' 文件
    "sourceMap": true, // 生成相应的 '.map' 文件
    "outFile": "./", // 将输出文件合并为一个文件
    "outDir": "./", // 指定输出目录
    "rootDir": "./", // 用来控制输出目录结构 --outDir.
    "removeComments": true, // 删除编译后的所有的注释
    "noEmit": true, // 不生成输出文件
    "importHelpers": true, // 从 tslib 导入辅助工具函数
    "isolatedModules": true, // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true, // 启用所有严格类型检查选项
    "noImplicitAny": false, // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": false, // 启用严格的 null 检查
    "noImplicitThis": false, // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": false, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true, // 有未使用的变量时，抛出错误
    "noUnusedParameters": true, // 有未使用的参数时，抛出错误
    "noImplicitReturns": false, // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true, // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用于解析非相对模块名称的基目录
    "paths": {
      "@/*": ["src/*"]
    }, // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": ["./node_modules/@types/", "./types"], // 包含类型声明的文件列表
    "types": ["vite/client", "element-plus/global"], // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./", // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./", // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": false, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": false, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 为装饰器提供元数据的支持
  }
}
```

## 三、TypeScript 类型系统

### 1. 原始类型

```typescript
let str: string = '123'; -> 字符串
let num: number = 123; -> 数字
let bol: boolean = true; -> 布尔值
let strArray: string[] = ['123','456']; -> 在元素类型后面接上[]，表示由此类型元素组成的一个数组
let numArray: Array<number> = [123,456]; -> 数组泛型，Array<元素类型>
let tuple: [string, number] = ['123',123]; -> 元祖Tuple,tuple[0]='123'
enum Color {Red,Green,Blue}; -> 枚举 enum
let c:Color = Color.Green;
```

### 2. 特殊类型

```typescript
let power: any;  -> any类型，所有类型都能被赋值給它，它也能被赋值给其他任何类型。
let u:undefined = undefined; -> 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。undefined 表示未初始化的值
let nu:null = null; -> 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。 null 表示不存在
function log(message: string): void { -> 使用：void来表示一个函数没有一个返回值
  console.log(message);
}
function liveDangerously(x?:number|null): void { -> 使用：void来表示一个函数没有一个返回值
  console.log(x!.toFixed(2)); // !仅当x不为null时候使用
}
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
} ->
  never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
  never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
```

### 3. 接口

```typescript
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
} -> SquareConfig带有上面定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它

接口是 TypeScript 的一个核心知识，它能合并众多类型声明至一个类型声明：

函数类型接口

interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

### 4. 泛型

```typescript
function reverse<T>(items: T[]): T[] {
  const toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}
```

### 5. 联合类型

```typescript
你可能希望属性为多种类型之一，如字符串或者数组。这正是 TypeScript 中联合类型能派上用场的地方（它使用 | 作为标记，如 string | number）。关于联合类型，一个常见的用例是一个可以接受字符串数组或单个字符串的函数：

function formatCommandline(command: string[] | string) {
  let line = '';
  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }
  // Do stuff with line: string
}
```

### 6. 类型断言

```typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

