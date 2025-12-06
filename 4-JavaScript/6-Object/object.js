let x ={
    name : "Rohit",
    age : 20,
    percentage : 80.50,
    Ismarried : false
}

// console.log(x)
// console.log(x.age)
// console.log(x['age'])
// x.age = 24;
// console.log(x.age)
// x['age'] = 40
// console.log(x.age)


// forin Loop
for (const key in x) {
    if (!Object.hasOwn(x, key)) continue;
    console.log(key,x[key])
    
   
    
    
    
}

