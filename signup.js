import { checkInputs } from "./login";

const form=document.getElementById("form");
export const username=document.getElementById("username");
export const email=document.getElementById('email');
export const password=document.getElementById("password");
const confirm=document.getElementById("confirm");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();
});
export function setError(input,msg){
    const formControl=input.parantElement;
    const small=formControl.queryselector("small");
    small.innerText=msg;
    // add Error Class
    formControl.className="form-control Error";
}
export function setSuccess(input){
    const formControl=input.parantElement;
    formControl.className="form-control success";
}
// function isemail(email){
//     return /^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@"]+)|(".+"))@((\[[0-9]{1,3}\[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }