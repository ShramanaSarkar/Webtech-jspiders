
//Types to create an object:-----
// window is the supermost and global object in js
//1. object literal way

// syntax-var objName={
//     key1:value1,
//     key2:value2,
//     .
//     .
//     .
//     .
//     keyN:valueN
// }

// var student={
//     Sname:"mala",
//     Sid:21,
//     Sper:"92%"
// }
// console.log(student);

// //we can accesss the properties of the object by using two ways
// //dot notation
// console.log(student.Sid);
// console.log(student.Sname);
// //Bracket notation
// console.log(student["Sname"]);



// //2. new keyword

// // syntax-var Objname=new Object();
// var emp=new Object();
// console.log(emp);
// emp.Ename="sheena";
// emp.Eid=5;
// emp.Esal="35000"
// console.log(emp);




// //3. constructor function

// console.log(this);//window object
// //window object is the supermost object in js

// function pen(Pname,Pprice,Pcolor){
//     this.Pname=Pname;
//     this.Pprice=Pprice;
//     this.Pcolor=Pcolor;
// }
// var x=new pen("cello",10,"blue")
// console.log(x.Pcolor);



var student={
         Sname:"mala",
         Sid:21,
         Sper:"92%"
     }
let emp={
    Ename:"rohit",
    Esal:20000,
    Ecompany:"TCS"
}
     console.log(student);
     console.log(Object.keys(student));
     console.log(Object.values(student));
     console.log(Object.entries(student));
     console.log(Object.assign({},student,emp));//merge two or more objects
     console.log(emp.hasOwnProperty("Ename"));//display the given property is present or not
     
     //seal(): if the object is in sealed state we cannot able to add, delete but we can update, access it.
     console.log(Object.seal(emp));
     console.log(Object.isSealed(emp));//true

     emp.Eid=1;
     console.log(emp);//not added

     delete emp.Esal;
     console.log(emp);//not deleted
     
     emp.Esal=50000;
     console.log(emp);//updated

     console.log(emp.Ename);//selected

     
     //freeze(): if the object is in frozen state we cannot able to add,delete,update but we can access it.
     console.log(Object.freeze(emp));
     console.log(Object.isFrozen(emp));
     
     emp.Eid=100;
     console.log(emp);//not added
     
     delete emp.Esal;
     console.log(emp);//not deleted

     emp.Esal=75000;
     console.log(emp);//not updated

     console.log(emp.Esal);//selected
     
     
     
     
     
     
     

     