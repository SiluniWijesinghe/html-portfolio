
function validateForm() {



    let a = validateName();
    let b = validateUserId();
    let c = validatePassword();
    let d = validateZip();
    let e = validateCountry();
    let f = validateLanguage();
    let g = validateAddress();
    let h = validateSex();
    let i = validateEmail();




    if (a == true && b == true && c == true && e == true && f == true && h == true && i == true) {
        alert("You have successfully registered!");
        document.getElementById("form").reset();
      
    } else {
        alert("Error!");
    }


}



function validateName() {
    let x = document.getElementById("name").value;
    let letters = /^[A-Za-z]+$/;
    if (x.match(letters) && x != "") {
        document.getElementById("demoName").innerHTML = "";
        return true;
    } else {
        document.getElementById("demoName").innerHTML = "*This field is required and can have only alphabates";
        return false;
    }
}

function validateUserId() {
    let y = document.getElementById("uId").value;
    if (y.length >= 5 && y.length <= 12) {
        document.getElementById("demoID").innerHTML = "";
        return true;

    } else {

        document.getElementById("demoID").innerHTML = "*This field is required and must be length of 5 to 12";
        return false;
    }
}

function validatePassword() {
    let z = document.getElementById("pword").value;
    if (z.length >= 7 && z.length <= 12) {
        document.getElementById("demoPword").innerHTML = "";
        return true;
    } else {

        document.getElementById("demoPword").innerHTML = "*This field is required and must be length of 7 to 12";
        return false;
    }
}

function validateAddress() {
    let p = document.getElementById("address").value;
    if (p != "") {
        document.getElementById("demoAddr").innerHTML = "";
        return true;
    } else {
        document.getElementById("demoAddr").innerHTML = "*Optional";
        return false;
    }
}

function validateCountry() {
    let q = document.getElementById("country");
    if (q.value != "") {
        document.getElementById("cdemo").innerHTML = "";
        return true;

    } else {
        document.getElementById("cdemo").innerHTML = "*Select a country";
        return false;
    }
}


function validateLanguage() {
    let x = document.getElementById("eng");
    let y = document.getElementById("neng");
    if (x.checked || y.checked) {
        document.getElementById("demoLang").innerHTML = "";
        return true;
    } else {
        document.getElementById("demoLang").innerHTML = "*Select a langugae";
        return false;
    }
}

function validateZip() {
    let a = document.getElementById("zip").value;
    if (a != "") {
        document.getElementById("demoZip").innerHTML = "";
        return true;
    } else {
        document.getElementById("demoZip").innerHTML = "*Optional";
        return false;
    }
}


function validateSex() {
    let x = document.getElementById("female");
    let y = document.getElementById("male");


    if (x.checked || y.checked) {
        document.getElementById("demoSex").innerHTML = "";
        return true;

    } else {
        document.getElementById("demoSex").innerHTML = "*Select an option";
        return false;
    }
}

function validateEmail() {

    let e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = document.getElementById("email").value
    if (email.match(e) && email != "") {
        document.getElementById("demoEmail").innerHTML = "";
        return true;
    } else {
        document.getElementById("demoEmail").innerHTML = "*Enter a valid email address";
        return false;
    }

}


