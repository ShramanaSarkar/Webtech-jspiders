//!string:-collection of characters (or) bunch of characters.
//Its possible to represent string in three ways:-
//By using double quotes
// var names="Phoenix";
// console.log(names);
// console.log(typeof(names));
// //By using single quotes
// let fruit='Mango';
// console.log(fruit);//Mango
// console.log(typeof(fruit));//string
// //By using backticks
// const movie=`Harry Potter`;
// console.log(movie);
// console.log(typeof(movie));


//length
// let x="shramana"
// console.log(x.length);

//slice():- slice in string extract some part of the string. We can pass negative index also in this method.
// let str="apple,banana, kiwi"
// console.log(str.slice(6,11));//banan
// console.log(str.slice(6,18));
// console.log(str.slice(0,5));
// console.log(str.slice(-12,-6));
// console.log(str.slice(-18,-13));

//substring():-In this method everything will be same as slice but it will not take negative values

//substr():-length of the extracted part of the given string
// let str="apple,banana, kiwi"
// console.log(str.substr(14,5));//here we give starting index and length

//repeat():- repeats the string
let str1="shramana "
console.log(str1.repeat(5));

//indexOf():-
let str2="javascript"
console.log(str2.indexOf("a"));//1
//lastIndexOf():-
let str3="javascript"
console.log(str3.lastIndexOf("a"));//3

//charAt():-
let str4="javascript"
console.log(str4.charAt(5));//c

//charCodeAt():-
let str5="javaScript"
console.log(str5.charCodeAt(1));//ascii value of the element in 1 index position
console.log(str5.toUpperCase());//Converts all the alphabetic characters in a string to Uppercase.
console.log(str5.toLowerCase());//Converts all the alphabetic characters in a string to lowercase.

//concat():-
let x1="Web ";
let x2="Technology"
console.log(x1.concat(x2));

//replace():-
let y="please visit jspiders"
console.log(y.replace('jspiders',"qspiders"));

//replaceAll()
let y1="i love cats, bcz cats are cute"
console.log(y1.replace("cats","dogs"));
console.log(y1.replaceAll("cats","dogs"));

//trim():-it will remove space from both sides, and give the string
// let y2="   java   "
// console.log(y2.length);
// let res=y2.trim()
// console.log(res.length);

//trimStart():-
// let y2="   java   "
// console.log(y2.length);
// let res=y2.trimStart()
// console.log(res.length);

//tirimEnd():-
// let y2="   java   "
// console.log(y2.length);
// let res=y2.trimEnd()
// console.log(res.length);


//padStart()
let y3="sharo"
console.log(y3.padStart(7,"sheela"));//7=length of the string
console.log(y3.padEnd(7,"sheela"));
console.log(y3.padEnd(4,'sh'));

//split():-covert the string into an array
let y4="java"
console.log(y4.split(''));

//imp questions
//1.How to reverse the string.
var city="Banglore"
var c=city.split('')
console.log(c);
console.log(c.reverse());

//2.Check if the string is a palindrome. //ex. madam
var p1="madam"
var p2=p1.split('')
var r=p2.reverse();
if(p2==r){
    console.log("the string is a palindrome");
    
}
else{
    console.log("the string is not palindrome");
    
}

//3.Count the no. of vowels in a string. //a,e,i,o,u

//4.Count the no. of words in a string.
var x ="Welcome to learn javascript"


//5.Remove duplicate characters ffrom the given string.
