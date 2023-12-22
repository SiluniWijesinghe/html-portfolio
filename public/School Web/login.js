
function validateLogin() {

    let x=validateUserId();
    let y=validatePassword();
    
    if(x==true && y==true){
        alert("You have successfully logged in!")
    }else{
        alert("Entered userID or password is incorrect!")
    }


}

function validateUserId() {
    let y = document.getElementById("uId").value;
    if (y.length >= 5 && y.length <= 12) {
        document.getElementById("demo1").innerHTML = "";
        return true;

    } else {

        document.getElementById("demo1").innerHTML = "*must be length of 5 to 12";
        return false;
    }
}

function validatePassword() {
    let z = document.getElementById("pword").value;
    if (z.length >= 7 && z.length <= 12) {
        document.getElementById("demo2").innerHTML = "";
        return true;
    } else {

        document.getElementById("demo2").innerHTML = "*must be length of 7 to 12";
        return false;
    }
}