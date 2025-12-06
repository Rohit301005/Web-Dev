// let x = document.querySelector("h2")
// x.style.color = "red"

// let y = document.querySelector("h1")
// // y.style.backgroundColor="red"
// // y.innerHTML = "Changed"
// setTimeout(function(){
//     y.innerHTML = "Changed"
// },2000)

let x = document.getElementById("ele1") //Rohit
x.addEventListener("click",function(){
    x.style.color = "yellow"
    x.style.backgroundColor = "red"
})

let y = document.getElementById("ele2")   //Akash
x.addEventListener("mousemove",function(){
    y.style.color = "white"
    y.style.backgroundColor = "orange"
})


let z = document.getElementById("ele3")  //Bijit
y.addEventListener("click",function(){
    z.style.color = "white"
    z.style.backgroundColor = "black"
})