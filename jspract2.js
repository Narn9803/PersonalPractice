let nums = [10, 20, 30, 40, 50];

//forloop
for (let i = 0; i < nums.length; i = i+1) {
    console.log("noramlfor", nums[2]);
}
//forof
for (const element of nums) {
    console.log("forof", element);
}

let arr = ["a", "b", "c", "d"];

for (let j = arr.length-1; j >= 0; j = j-1) {
    const element = arr[j];
    console.log("revfoprloop" ,element, j);
    
}