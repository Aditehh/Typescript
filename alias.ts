type Point = {
    x: number;
    y: number;
};

function printcoord(pt: Point) {
    console.log("the coordinates of x value is " + pt.x)
    console.log("the coordinates of y value is " + pt.y)
}
printcoord({ x: 100, y: 100 });

type names = {
    a: string;
    b: string;
    c: string;
}

function printnames(n: names) {
    console.log(n.a + " is the friend of " + n.b + "which is not the friend of " + n.c)
}

printnames({ a: "aditya", b: "messi", c: "rolando" })
export { } 