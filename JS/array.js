// Array- collection of data, array is heterogenous in nature.
// 3-ways to create the array.
// 1.By using array literals
// syntax- var ArrayName=[data1,data2,data3,..........,datan]
var arr=[22,true,undefined,"js"]
console.log(arr);
console.log(typeof(arr));

// 2.By using new keyword
// syntax-var ArrayName=new Array();
var nonveg=new Array();
console.log(nonveg);
nonveg[0]="chicken"
nonveg[1]="fish"
nonveg[2]="biryani"
nonveg[3]="mutton"
console.log(nonveg);
console.log(nonveg[2]);
console.log(nonveg.length);

// 3.By using constructor function
// syntax-var ArrayName=new Array(data1,data2,data3,......,datan)
var veg=new Array("paneer","mushroom","poha","idli sambaar")
console.log(veg);
console.log(veg[0]);
console.log(typeof(veg));




//concat()-merge two or more arrays. It returns new array consists of two or more merged arrays

var x=[2,3,4,5];
var y=[20,30,40,50];
var z=[true,"js"];
var v=['g',9,null]
console.log(x.concat(y,z,v));
console.log(x);

//push()-add elements at the end
var x=[1,2,3,4]
console.log(x.push(10,20,30));
console.log(x);

//unshift()-adds elements at the beginning
var x=[2,5,7,9]
console.log(x.unshift(40,34,67,98));
console.log(x);

//pop-removes the last element
var x=[4,5,6,7]
console.log(x.pop());
console.log(x);

//!shift():-removes the first item of an array.
var x=[20,21,30,31]
console.log(x.shift());

//reverse()- reverse the given order of element
var x=[12,13,14,15]
console.log(x.reverse());

//sort()- sort in ascending order
let fruits=["apple","kiwi","mango","lichi","banana"]
console.log(fruits.sort());

//includes()-used to check the given element is present in the given array
let fruit=["apple","kiwi","mango","lichi","banana"]
console.log(fruit.includes("mango"));
console.log(fruit.includes("guava"));

//indexOf()-returns the index value
let f=["apple","kiwi","mango","lichi","banana","dragon fruit"]
console.log(f.indexOf("lichi"));

//join()-convert given array to string
const z1=["a","p","p","l","e"]
console.log(z1);
console.log(z1.join(""));

//at()-return the element in the given index
let f1=["apple","kiwi","mango","lichi","banana","dragon fruit"]
console.log(f1.at(4));

//toString()-return the elements with separaters(,)
let f2=["apple","kiwi","mango","lichi","banana","dragon fruit"]
console.log(f2.toString());

//slice()-extract a part of the given array. it will never change the original array.
//syntax- slice(starting point(index value),ending point(length till the element))
const z2=[90,50,"true",false,21.08,null]
console.log(z2);
console.log(z2.slice(1,3));
console.log(z2.slice(4,5));
console.log(z2);


//splice()-it will delete the element and also add elements. splice method will modify the original array.
//syntax-splice(starting point,delete count,[add element])
const z3=[34,70,"true",false,45.08,null]
console.log(z3);
console.log(z3.splice(3,1));
console.log(z3);

console.log(z3.splice(1,0,55,66,77,88));
console.log(z3);

console.log(z3.splice(1,1,100,99,98));
console.log(z3);

//imp question: diff. bt. slice and splice method?????

//!1. How to find biggest element in an array.//sort().pop()
var x7=[50,21,7,86,25,76];
let maxnum=x7[0];
for(var i=1;i<x7.length;i++){
    if(x7[i]>maxnum){
        maxnum=x7[i];
    }
}
console.log(maxnum);

//!2. How to find least element in an array.//sort().shift()
var x7=[50,21,7,86,25,76];
let minnum=x7[0];
for(var i=1;i<x7.length;i++){
    if(x7[i]<minnum){
        minnum=x7[i];
    }
}
console.log(minnum);
//!3. How to arrange the elements in decending form.//sort().reverse()
var x7=[50,21,7,86,25,76];
x7.sort(function(a, b) {
    return b - a;
});

console.log(x7);

// console.log(x7.sort());
// console.log(x7.reverse());


//!4. How to find the biggest element in an array without altering the existing array.//sort(),slice()
//!5. How to find the least element in an array without altering the existing array.sort(),slice()

var x7=[50,21,7,86,25,76]