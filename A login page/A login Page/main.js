let id=(id)=>document.getElementById(id);
let classes=(classes)=>document.getElementsByClassName(classes);
let username=id("Username"),
email=id("email"),
password=id("Password"),
form=id("form"),

erromessage=classes("error"),
successicon=classes("success-icon"),
failureicon=classes("failure-icon");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validation(username, 0, "Username cannot be blank");
    validation(email, 1, "Email cannot be blank");
    validation(password, 2, "Password cannot be blank");
})
let validation=(id,serial,message)=>{
    if(id.value.trim()==="")
    {
        erromessage[serial].innerHTML=message;
        failureicon[serial].style.opacity="1";
        successicon[serial].style.opacity="0";

    }
    else{
        erromessage[serial].innerHTML="";
        failureicon[serial].style.opacity="0";
        successicon[serial].style.opacity="1";
    }
};
function Toggle() {
    var temp = document.getElementById("Password"),
    eyeicon=classes("eye");
    
    if (temp.type === "password") {
        temp.type = "text";
        eyeicon.style.color="blue";

    }
    else {
        temp.type = "password";
        eyeicon.style.color="black";
    }
}



