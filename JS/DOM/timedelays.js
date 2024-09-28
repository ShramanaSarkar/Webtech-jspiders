//var x=document.getElementById("btn")
// x.setInterval(() => {
//     alert("hello")
// }, 2000);



// setInterval(function () {
//     x.innerHTML+="hello"
// },2000)


// function demo() {
//     var x=document.getElementById("btn");
//     x.innerHTML+="bye"
// }

// var res=setInterval(demo,3000)

// function mystop() {
//     clearInterval(res)
// }

function task() {
    document.getElementById("btn").innerHTML="good day"
}


const res=setTimeout(task,5000);

function demo() {
    clearTimeout(res)
}



