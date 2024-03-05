
    let signupbtn = document.getElementById("signupbtn");
    let signinbtn = document.getElementById("signinbtn");
    let sub = document.getElementById("sub");
    let namefield = document.getElementById("namefield");
    let title = document.getElementById("title");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

signinbtn.onclick = function() {

    namefield.style.maxHeight = "0" ;
    title.innerHTML= "Sign In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
    sub.classList.remove("disable");
    
}

signupbtn.onclick = function() {
    namefield.style.maxHeight = "60px" ;
    title.innerHTML= "Sign Up";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
    sub.classList.remove("disable");
}

