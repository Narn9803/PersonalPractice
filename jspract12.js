//Pass by value
let a = 10;
let b;

b = a;
console.log("a " + a);
console.log("b " + b);

//Pass by Reference

let c1 = {
    name:"BMW",
    cost: 75,
    milleage:8.9
}
let c2;
c2 = c1;
console.log("c2", c2);
c2.name = "KIA";
console.log(c2.name);
console.log(c1);

