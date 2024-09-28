//!function:-To perform some specific task according to user requirement. We can call the function n number of times. In a function we can use only one return keyword.
// syntax:-function functionName(params) //function declaration
// {
//     //statements(or)logic
// }  

// functionName()//function call statement

function add() {
    console.log(20+30);
    
}
add()

//Types of functions:--------------

// 1. named function-A function having a name we are calling it as a named funtion.

// parameterized function-A function having parameter we are calling it as a parameterized function.

// parameter-parameter is nothing but a variable which is used to hold the arguments. Parameters    are passed in function declaration.
// Argument-values/data passing in function call statement.

function sum(a,b){
    console.log(a,b);
    console.log(a+b);
    
}
sum(20,60)


// 2. anonymous function-A function without any name.

var x=function(a,b){
    console.log(a*b);
    
    console.log("Good Afternoon");
    
}
x(4,12)//function call statement


// 3. rest-parameterized function

function display(...a)
{
console.log(a);
console.log(a[3]);


}
display(22,7,35,38,2,92,4,9,47)


// 4. nested function-A function inside another function.

//closure-Inner function can able to access the outer function properties but vice versa is not possible.
//js currying-calling the child function along with parent function
//In a function we can have only one return statement that to in the last.

// function parent() {
//     let x=20
//     console.log(x-y);
//     function child() {
//         let y=10
//         console.log(x+y);
        
//     }
//     return child;
// }
// parent()()//js curring


// 5. call-back function-A function passing as an argument.

function task(sub) {
    // console.log(sub);
    return sub;
    
}
var x=task(function() {
  return 'js'  
})
console.log(x());


// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();
//   }
  
//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }
  
//   greet("Alice", sayGoodbye);


// 6. arrow function
//syntax-var x=()=>{//statements}
var x=()=>{console.log("Hello People");
}
x()
//if the arrow function doesn't having the parameters we can skip the ()paranthesis but we should place the _ symbol.
var x=_=>{console.log("hiii");
}
x()
//if we have only one parameter we can skip the ()paranthesis.
var x=a=>{console.log("bye");
}
x()
//if we have only one statement we can skip the {}curly braces.
var x=a=>console.log("hlw");
x()

var x=a=>{return a}
console.log(x("sheela"));
//if we have only one return keyword we can skip the return keyword along with {}
var x=a=>a;
console.log(x("sheena"));


// 7. iife (Immediate invoking function with expression)-Along with function declaration immediately calling the function. 
//Inside iife function declaration we can use only anonymous function
(function (a,b) {
    console.log(a+b);
    console.log(a/b);
    
    
})(10,20)


// 8. Higher-order function-A function passing as a parameter.
function demo() {
    console.log("js");
    
}
function disp(x){
    console.log(x);//function demo(){console.log("js")}
    x();//function call statement for demo function

}
disp(demo)


// 9. Generator function
//return keyword returns only one value whereas yield keyword will return multiple values
function* gen(){
    yield 1;
    yield 2;
    yield 3;
    yield "shivam";
}
var z=gen()
// console.log(z.next().value);
for(i=0;i<=3;i++){
    console.log(z.next().value);
    
}
