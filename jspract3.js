for (let i = 1; i <= 5; i=i+1) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

let num = 1213;
let temp = num;
let rev = 0;

while (num > 0) {
  let digit = num % 10;
  rev = rev * 10 + digit;
  num = Math.floor(num / 10);
}

console.log(temp === rev ? "Palindrome" : "Not Palindrome");