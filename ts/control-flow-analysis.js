// 控制流分析
function example() {
    var x;
    x = Math.random() < 0.5;
    console.log(x); // boolean
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x); // string
    }
    else {
        x = 100;
        console.log(x); // number
    }
    return x;
}
var x = example();
x = "hello";
x = 100;
x = true;
