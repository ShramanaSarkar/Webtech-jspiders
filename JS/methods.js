// var arr=[21,31,41,51,61,71]
// var res=arr.filter((ele,index,arr)=>{
//     console.log(ele,index,arr);
    
//     return ele>40;
// })
// console.log(res);

// var arr=[21,31,41,51,61,71]
// let res=arr.map((ele,index,arr)=>{
//     return ele*ele;
// })
// console.log(res);

var arr=[21,31,41,51,61,71]
var res=arr.reduce((previous,ele,index, arr)=>{
    console.log(previous,ele,index, arr);
    return previous+ele;
},0)
console.log(res);
