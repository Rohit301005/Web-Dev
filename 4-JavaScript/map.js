// without map 
// let arr = [1,3,5,7,9]
// console.log(arr)
// let brr = []

// for (const ele of arr) {
//     brr.push(ele*2)
    
// }
// console.log(brr)



// with map

// function twice(ele){
//     return 2*ele
// }

// var arr = [1,3,5,7,9]
// console.log(arr)
// var brr = arr.map(twice)
// console.log(brr)


// function square(ele){
//     return ele*ele
// }

// var arr = [1,3,5,7,9]
// console.log(arr)
// var brr = arr.map(square)
// console.log(brr)

// more optimize way
var arr = [1,3,5,7,9]
console.log(arr)
var brr = arr.map(function(ele){
    return 2*ele
})
console.log(brr)