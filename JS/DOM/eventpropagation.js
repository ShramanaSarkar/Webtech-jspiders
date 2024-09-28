//EventPropagation: How the event is travelling in the dom tree.
//Event Capturing Phase: The event starts travelling from the root
// var x=document.getElementById("parent")
// var y=document.getElementById("child")
// x.addEventListener('click',function(){
//     alert("clicked parent")
// },true)
// y.addEventListener('click',function() {
//     alert("clicked child")
// })

//Event bubbling: the event starts travelling from targeted element up to root element
// var x=document.getElementById("parent")
// var y=document.getElementById("child")
// x.addEventListener('click',function(){
//     alert("clicked parent")
// })
// y.addEventListener('click',function() {
//     alert("clicked child")
// })

//stopPropagation():
function demo1() {
    alert("child")
    if (document.getElementById("input").checked) {
        event.stopPropagation()
    }
}
function demo2() {
    alert("parent")
}

