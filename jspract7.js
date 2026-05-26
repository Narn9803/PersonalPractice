// Looping Statements
//print nos  1 to 10
// for (let i = 0; i <= 1; i = i + 1){
//     console.log("i "+i);   
// }
//print even numbers
// for (let i1 = 0; i1 <= 20; i1++) {
//     if(i1 % 2 !== 0){
//         console.log("i1Odd "+i1);
//     }else{
//        console.log("i1Even "+i1); 
//     }
// }

//prob5:Print numbers from 1 to 50:
// If divisible by 3 → "Fizz"
// If divisible by 5 → "Buzz"
// If divisible by both → "FizzBuzz"
// Else → print number

// for(let num = 1; num <= 50; num = num + 1){
//     let num1 = "";
//     if(num%3 === 0 && num%5 === 0){
//         num1 = "FizzBuzz";
//     }else if(num % 5 ===0){
//         num1 = "Buzz";
//     }else if (num%3 === 0){
//         num1 = "Fizz";
//     }else{
//         num1 = num;
//     }
//     console.log(num1);
// }

// Pro way
// for(let num = 1; num <= 50; num = num + 1){
//     let res = "";
//     if (num % 3 == 0)res += "Fizz";
//     if (num % 5 == 0)res += "Buzz";
//     console.log(res || num);
// }

// Problem 4 — Find Prime Numbers (1–100)
// Print all prime numbers from 1 to 100.
// Rules:
// Use loops only
// No built-in prime functions
// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if(isPrime) console.log("Prime Numbers "+i);
// }

// for (let i = 1; i <= 9; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// for (let i = 1; i <= 5; i++){
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//         result = result + j;
//     }
// }
let i =1;
// while (i <= 7){
//     let result = '';
//     let j = 1;
//     while (j <= i) {
//         result += j;
//         j++;
//     }
//     console.log(result);
//     i++;
// }
// do {
//     let result = '';
//     let j = 1;
//     do{
//        result += j;
//        j++; 
//     } while (j <= i);
//     console.log("dowhile "+ result);
//     i++;
// } while (i <= 5);

// let num = 1234;
// let rev = 0;

// for (; num > 0; num = (num - (num % 10)) / 10) {

//   let digit = num % 10;
//   rev = rev * 10 + digit;

// }

// console.log(rev);

//destructuring
let user = {
  name: "Narn",
  age: "27", 
  sex: "M"
}
const {name, age, sex} = user;
console.log(name, age, sex);
