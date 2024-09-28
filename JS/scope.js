//scope- it cope determines the accessibility (visibility) of variables.

//1.Global scope
// var x1=10;
// let x2=100;
// const x3=1000;
// console.log(x1);//10
// console.log(x2);//100
// console.log(x3);//1000

// function demo() {
//     console.log(x1);//10
//     console.log(x2);//100
//     console.log(x3);//1000
// }
// demo()


//2.local scope
//  function demo() {
//     var x1=10;
//     let x2=100;
//     const x3=1000;
//      console.log(x1);//10
//      console.log(x2);//100
//      console.log(x3);//1000
    
//  }
//  demo()
//  console.log(x1);//undefined
//  console.log(x2);//error
//  console.log(x3);//error

 
 //3.block scope
//  {
//     var x1=10;
//     let x2=100;
//     const x3=1000;
//      console.log(x1);//10
//      console.log(x2);//100
//      console.log(x3);//1000
    
//  }
//  console.log(x1);//10
//  console.log(x2);//error
//  console.log(x3);//error

//hoisting: Moving the declaration at the top of the original code.
console.log(x1);//undefined
var x1=10;

// console.log(x2);//error
// let x2=10;

// console.log(x3);//error
// const x3=10;

//Double equal: The double equal(‘==’) operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison.
//it check only value
if(10==10){
    console.log("radha loves krishna");   
}
else{
    console.log("krishna loves radha"); 
}

//Triple equal: The triple equal(‘===’) operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.
//it checks value and datatype also 
if(10==='10'){
    console.log("radha loves krishna");   
}
else{
    console.log("krishna loves radha"); 
}