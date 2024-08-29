//!Dtatypes:-What kind of the data we are storing in a variable.
//Primitive datatype:- In a variable if we are storing single kind of the data we are calling it as a primitive datatype.
//ex:-string, boolean, number, bigint, null, undefined, Symbol
//Non-primitive:- In a variable if we are storing multiple kind of the data we are calling non-primitive datatype.
//ex:-funtion, array, object....etc


//!string:-collection of characters (or) bunch of characters.
//By using double quotes
var names="Phoenix";
console.log(names);
console.log(typeof(names));
//By using single quotes
let fruit='Mango';
console.log(fruit);//Mango
console.log(typeof(fruit));//string
//By using backticks
const movie=`Harry Potter`;
console.log(movie);
console.log(typeof(movie));


//!boolean
var x=true;
console.log(x);//true
console.log(typeof(x));//boolean

var x1=false;
console.log(x1);//false
console.log(typeof(x1));//boolean

let x2="false";
console.log(x2);//false
console.log(typeof(x2));//string


//!number
var num1=20;
console.log(num1);//20
console.log(typeof(num1));//number


//!bigint
const num2=455262838929202298976556n;
console.log(num2);
console.log(typeof(num2));


//!undefined:-Declare a variable without assigning any value to it.
var n;
console.log(n);
console.log(typeof(n));


//!null:-making any container as a empty container by passing null datatype.

var n2=60;
console.log(n2);
console.log(typeof(n2));
n2=null;
console.log(n2);
console.log(typeof(n2));


//!Symbol

let s=Symbol;
console.log(s);
console.log(typeof(s));




