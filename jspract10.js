let flavours = ["Vanila", "ButterScoch", "Strawberry", "Mango"];
console.log("flavours "+ flavours[flavours.length-2]);

let sampleArr = ["Choc", true, null, 1212, {id:2}];
console.log("sampleArr", sampleArr[sampleArr.length-1]);

let vval = sampleArr[sampleArr.length-1].id; 
console.log("vval", vval);

//Array Constructor
let arr = new Array();
arr[0] = "Good";
arr[1] = "Bad";
arr[2] = "Ugly";
console.log("array", arr[arr.length-3]);

//Dense Array
let a1 = [1,2,3,4,5]; //contigous memory
console.log("a1", a1);

//Sparse array
let a2 = [3,,2,,5,6]; //hash table or hash map
console.log("a2", a2);