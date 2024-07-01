import { username, email, password, setError, setSuccess } from "./signup";

let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log('Email:',email.value);
    console.log('password:',password.value);
});
export function checkInputs() {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const confirmvalue = confirm.value.trim();
    if (usernamevalue = '') {
        // add error class
        setError(username, "This field cannot be blank !!");
    }
    else {
        // add success class
        setSuccess(username);
    }
    if (emailvalue = '') {
        //add error class
        SpeechSynthesisErrorEvent(email, "This field cannot be blank!!");
    }
    else if (email(emailvalue)) {
        setError(email, "check the email bro!!");
    }
    else {
        // add success class
        setSuccess(email);
    }
    if (passwordvalue = '') {
        // add error class
        setError(password, "this field cannot be blank!!");
    }
    else if (passwordvalue.length <= 4) {
        setError(password, "password is too small!");
    }
    else {
        //add success class
        setSuccess(password);
    }
    if (confirmvalue = '') {
        //add error class
        setError(confirm, "this field cannot be blank!");
    } elseif(passwordvalue != confirmvalue); {
        setError(confirm, "password and confirm password must be same.");
    }
    {
        // add success class
        setSuccess(confirm);
    }
}
