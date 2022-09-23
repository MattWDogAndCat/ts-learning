"use strict";
function fn1(x, y) {
    return x + y;
}
let fn2;
fn2 = (a, b) => {
    return a + b;
};
function fn3(x, y) {
    return "hello world";
}
function fn4(x, y) {
    console.log(x);
}
function fn5(x, y, ...rest) {
    return "helo";
}
function fn6(x, y, z = "apple", a, ...rest) { }
function fn7(x) {
    if (typeof x === "string") {
        return "hello";
    }
    if (typeof x === "number") {
        return 1;
    }
}
//# sourceMappingURL=function.js.map