//hoisting
function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();
// Here JS decalres var a; before the function and since var is global scope a is working and b is not working.This is hoisting
console.log(a);
console.log(b);
// var hoisting
console.log(x); // undefined
var x = 5;
// let hoisting
console.log(y); // ReferenceError
let y = 10;

console.log("Hello");
// New Line
