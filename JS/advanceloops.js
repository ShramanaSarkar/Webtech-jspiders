//for in:-it is used to iterate the array over the index values.
// var x=[21,31,41,51,61,71]
// for(var arr in x){
//     console.log(arr,x[arr]);  
// }

//for of:it is used to iterate the array over the values itself.
// var x=[21,31,41,51,61,71]
// for(var arr of x){
//     console.log(arr);  
// }

//forEach():it is used to iterate only array. (ele(element in each iteration),index(index value),x(original array))
// var x=[21,31,41,51,61,71]
// x.forEach((ele,index,x)=>{
// console.log(ele,index,x);

// })

var stu={
        Sname:"mala",
        Sid:21,
        Sper:"92%"
     }

    console.log(stu);

    // for(var obj in stu){
    //     console.log(obj,stu[obj]);
    // }

     // for(var obj in stu){
    //     console.log(obj+" : "+stu[obj]);
    // }

    // for(var obj1 of stu){
    //     console.log(obj1);  //Uncaught TypeError: stu is not iterable
    // }

    // for(var obj1 of Object.keys(stu)){
    //     console.log(obj1,stu[obj1]);
    // }

   