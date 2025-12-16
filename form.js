  let form=document.getElementById("myForm")
    let error=document.getElementById("error")

form.addEventListener("submit",(e)=>{
e.preventDefault();
let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let password=document.getElementById("password").value;
let gender=document.querySelector(`input[name="gender"]:checked`)
let terms=document.getElementById("terms").checked;

if(name.length<3){
    showError("Name must be at least 3 characters");
    return;
}
if(!email.includes("@")){
    showError("invalid email address");
    return;
}
if(password.length<6){
    showError("password must be at least 6 characters");
    return;
}
if(!gender){
    showError("please select gender");
    return;
}
if(!terms){
    showError("please accept term & conditions");
    return;
}
error.style.color="green";
error.textContent="Form submitted succesfully !"
form.reset();
});
function showError(message){
    error.style.color="red";
    error.textContent=message;
}
