// console.log("hello");
// console.log(a);
// var a = 10;
// console.log(b);
// let b = 9;
// var x;
// var y;
// try{
//     y = x +10;
// }catch(error){
//     console.error("Irritating",error);
    
// }finally{
//     console.log("Exectuted");
// }
// let arrfn = (a, b) => a+b;
// try {
//     arrfn(1, "a");
// } catch (error) {
//     console.error(error);
// }finally{
//     console.log("done");
    
// }
// console.log(arrfn(10, 98));

// var sayhello = () => console.log("HelloHII");

// sayhello();

// var arrow = (x, y) =>{
//     return x + y;   
// }
// let dd = arrow(2,3);
// console.log("Answer", dd);

// const name = "Kumar";

// let retfn = fname => fname;

// let finalop = retfn(name);

// console.log( finalop );

// Higher Order and Callback fn

// function function1(){
//     console.log("Higher Order Fn");
    
// }

// function function2(){
//     console.log("Call Back Function");
    
// }

// function1(function2());

// function add(a, b, callback) {
//     console.log(a+b);
//     callback(a, b);
// }
// function subtract(num1, num2) {
//     console.log(num2-num1);
    
// }

// add(10, 20, subtract);

// // Currying
// function add(a) {
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
            
//         }
//     }
// }
// add(1)(2)(4);

// let curry1  = add(100);
// let curry2 = curry1(200);
// curry2(300);
// // console.log(curry1);
// // console.log(curry2);


// //IIFE or Self Invoked Function
// (function name(params) {
//     console.log("Self Invoked");
    
// })()

//Closure
// function outer() {
//     let a = "Outer function variable";
//     function innerfun() {
//         console.log(a);
//     }
//     return innerfun;
// }
// let of = outer();
// of();

// function createBankAccount(balance) {
//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log("Balance:", balance);
//     },
//     withdraw(amount) {
//       balance -= amount;
//       console.log("Balance:", balance);
//     }
//   };
// }

// const account = createBankAccount(100);

// account.deposit(50);
// account.withdraw(30);

//generatpor function
// function* generatorFunction() {
//     yield "First Yield";
//     yield "Second Yield";
//     yield "Third Yield";
//     return "Final Val"
// }
//  let genfun = generatorFunction();
//  console.log(genfun.next());
//  console.log("Yielded First");
//  console.log(genfun.next());
//  console.log("Yielded Second");
//  console.log(genfun.next());
//  console.log("Yielded Third");
//  console.log(genfun.next());