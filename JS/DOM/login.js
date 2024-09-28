let x=new Promise(function(success,error) {
    let data=true;
    if(data){
        success("promise done")
    }else{
        error("promise not dont")
    }
})
console.log(x);