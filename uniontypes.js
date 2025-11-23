//union in ts 
var score = 33;
score = 44;
score = "fifetyfive";
console.log(score);
var hites = {
    name: "hitesh", id: 2323
};
hites = { username: "fla", id: 334 };
function getDBId(id) {
    //making some api class to bring on id
    if (typeof id == "number") {
        console.log("db id ins: ".concat(id));
    }
    else if (typeof id == "string") {
        console.log("your name might be " + id);
    }
}
getDBId("aditya");
