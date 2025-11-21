"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printcoord(pt) {
    console.log("the coordinates of x value is " + pt.x);
    console.log("the coordinates of y value is " + pt.y);
}
printcoord({ x: 100, y: 100 });
function printnames(n) {
    console.log(n.a + " is the friend of " + n.b + "which is not the friend of " + n.c);
}
printnames({ a: "aditya", b: "messi", c: "rolando" });
