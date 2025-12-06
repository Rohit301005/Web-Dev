// function hello(){
//     console.log("HELLO")
// }

// function mello(){
//     console.log("mello")
// }


// setTimeout(hello,2*1000)
// setTimeout(mello,1*1000)

// print a number from 1 to 10 in one second delay


for(let i =1;i <= 10;i++){
    setTimeout(function(){
        console.log(i)
    },i*1000)
}