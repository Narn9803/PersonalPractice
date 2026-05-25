var obj = [{name:"arav", age:"26", gender:"M"}, 
            {name:"aravindha", age:"27", gender:"Male"},
            {name:"aravnarn", age:"26", gender:"M"},
            {name:"aravlaldd", age:"28", gender:"Male"},
            {name:"aravkkefef", age:"21", gender:"Male"}];

for (let index = 0; index < obj.length; index= index + 1) {
    const user = obj[index];
    console.log("normal for", user);  
}

for (const element of obj) {
    console.log("forof", element)
}

for (const key in obj) {
    console.log("forin1", obj[key]);    
}

var ind = 0;
while (ind < obj.length) {
    console.log("Whileloop",obj[ind] );
    ind++;
}

var ind2 = 0;
do {
    console.log("DoWhileloop",obj[ind2] );
    ind2++;
} while (ind2 < obj.length);

obj.forEach(element => {
    console.log("foreach1", element)
}); 