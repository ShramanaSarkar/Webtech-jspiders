//3. Difference between var, let and const.

//ans.  //1. Declaration:----
        var a; //declaration possible
        console.log(a);
        let b; //declaration possible
        console.log(b);
        //const c; //declaration not possible
        //console.log(c);

        //2. Initialization:----
        var a1;
        a1=2; //initialization possible
        console.log(a1);
        let b1;
        b1=3; //initialization possible
        console.log(b1);
        const c1=9; //declaration with initialization possible
        //c1=5; //only initialization not possible
        console.log(c1);

        //3. Reinitialization:----
        var a2=6;
        a2=1 //reinitialization possible
        console.log(a2);
        let b2=4;
        b2=66; //reinitialization possible
        console.log(b2);
        const c2=34;
        //c2=61; //reinitialization not possible
        console.log(c2);

        //4. Redeclaration:----
        var a3=12;
        var a3=23; //redeclaration possible
        console.log(a3);
        let b3=16;
        //let b3=23;  //redeclaration not possible
        console.log(b3);
        const c3=22;
       // const c3=44;  //redeclaration not possible
        console.log(c3);

        //5. Scope:---
        //var is a global scope whereas let and const are Script scope.

        //6. Hoisting:----
        console.log(a5);//possible 
        var a5;
        //console.log(b5);//not possible
        let b5;
        //console.log(c5);//not possible
        const c5=1
   
        
//4. What is call back function along with one example for it and Arrow function rules.

     //ans. Callback function:- It is a function which is passed as an argument to another function. The function is invoked in the outer function to complete an action.

     //Example of callback function:-----

    function greet(name) {
        console.log("Hello");
        name()
    }
    function g() {
             console.log("World");      
        }
    greet(g);

    //Arrow function:- It is a function used to reduce the syntax. It was introduced in ES6 version of javascript.
    //syntax-var x=()=>{//statements}
        var x=()=>{console.log("Hello People");
        }
        x()
        //Rules of arrow function:----
        //a. if the arrow function doesn't having the parameters we can skip the ()paranthesis but we should place the _ symbol.
        //b. if we have only one parameter we can skip the ()paranthesis.
        //c. if we have only one statement we can skip the {}curly braces.
        //d. if we have only one return keyword we can skip the return keyword along with {}
        //e. it is mandatory to use block if function consists of multiiple lines of code or if we use      return keword in function.


//5.How to create 6-digit OTP
    
    function otp(){
    var x=Math.random()*(999999-100000)+100000
    console.log(x);
    var otp=Math.floor(x)
    console.log(otp);


    var name=document.getElementById("username").value.toUpperCase()
    var res=document.getElementById("head").textContent="HII "+name+" YOUR OTP IS "+otp
    
    }
    otp()


//6. What is dom and different method of dom along with one example. 

    //Dom(Document Object Model):- It is a programming interface for web documents. 
    //It represents the structure of the document as a tree-like model where each node of it is an object representing a part of the document. 
    //When a web page is loaded the browser creates DOM of the page.
    
    //Methods of DOM are:----
    //1. getElementById(id):-
    var e1=document.getElementById("mypara")
    console.log(e1);
    //2. getElementsByClassName(classname)
    var e2=document.getElementsByClassName("content")
    console.log(e2);
    //3. getElementsByTagName(tagname)
    var e3=document.getElementsByTagName("div")
    console.log(e3[1]);
    //4. querySelector(selector)
    var e4=document.querySelector("div")
    console.log(e4);
    //5. querySelectorAll(selector)
    var e5=document.querySelectorAll(".mydiv")
    console.log(e5[0]);
    //6. createElement()
    var e6=document.createElement("p")
    console.log(e6);
    e6.textContent="This is a paragraph"
   
    
    
    
    


    

        
        
        
        
        
        


        

