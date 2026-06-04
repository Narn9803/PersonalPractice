// Pattern looping for loop
let n = 5;
for(let j = 1;j <= n; j++){
    let row = "";
    for(let i=1;i<= n;i++){
        if (i == 1 || i == n || j == 1 || j == n) {
            row = row + "*";
        } else {
            row = row + " ";
        }  
    }
    console.log(row);
}

//do while loop
// let i;
// let j = 1;
// let row;
// do {
//     row = "";

//     i = 1;

//     do {
//         if(i == 1 || i == 5 || j == 1 || j == 5){
//             row = row + "*";
//         } else {
//             row = row + " ";
//         } 
//         i++;
//     } while (i <= 5);

//     console.log(row);

//     j++;

// } while (j <= 5);

//while loop
// j = 1;
// while (j <=5) {
//     row = "";
//     i = 1;
//     while (i<=5) {
//         row = row + "*";
//         i++;
//     }
//     console.log(row);
//     j++;
// }

//Pro Coding for above  pattern case
// const size = 5;
// for (let row = 0; row < size; row++) {
//     console.log("*".repeat(size));
// }