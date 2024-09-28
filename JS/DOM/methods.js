// var x=document.getElementById("para");
// console.log(x);

// let x1=document.getElementsByClassName("box")
// console.log(x1);
// x1[1].style.backgroundColor="red"


// const x2=document.getElementsByTagName("div")
// console.log(x2);
// x2[2].style.backgroundColor="purple"


//querySelector will target first element 
// const x3=document.querySelector("div")
// console.log(x3);
// x3.style.backgroundColor="pink"

// var x4=document.querySelectorAll(".box")
// console.log(x4);
// x4[1].style.backgroundColor="aqua"

// const x=document.createElement("p")
// console.log(x);
// x.textContent="This is paragraph tag"
// x.innerHTML="paragraph"

//adding h2 element in div element
// function demo() {
//     var x1=document.createElement("h2")
// x1.textContent="heading2"
// let p=document.getElementById("parent")
// p.appendChild(x1)
// }

//adding class attribute to the p tag
// var x2=document.querySelector("p")
// console.log(x2);
// x2.setAttribute("class","para")//<p class="para"></p>


//replacing attribute
// var x3=document.querySelector(".para")
// console.log(x3);
// x3.setAttribute("id","text")

//removeChild(): it will delete the child element
// function demo() {
//     var x=document.getElementById("parent")
//     var y=document.getElementById("child")
//     x.removeChild(y)  
// }

//replaceChild(): it will replace one element with other
function demo() {
    var x=document.getElementById("parent")//div
var y=document.getElementById("child")//p
let child=document.createElement("h2")
child.textContent="This is heading2"
x.replaceChild(child,y)
}
