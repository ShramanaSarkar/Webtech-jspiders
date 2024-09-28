function otp(){
    var x=Math.random()*(9999-1000)+1000
    console.log(x);
    var otp=Math.floor(x)
    console.log(otp);


    var name=document.getElementById("username").value.toUpperCase()
    var res=document.getElementById("head").textContent="DEAR "+name+" YOUR OTP IS "+otp
    
}
otp()