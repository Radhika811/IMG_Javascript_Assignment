const EduQual = document.querySelector("select");
const phno = document.getElementById("phone");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const confirmpwd = document.getElementById("cnfrmpwd");
const Name = document.getElementById("name")
const city = document.getElementById("city")
const submit = document.getElementById("btn");
const error = document.getElementsByClassName("error");
const inputfields = document.querySelector("input");
const incomp = document.getElementById("incomplete");
const PhoneRegex = /^(\+91)?(0)?\s*?[6-9]\d{9}/
const EmailRegex = /^\w+@\w+\.com/
const nameRegex = /^[A-Za-z]{1}[a-z]+(\s*[A-Za-z]{1})?[a-z]*$/
const ageRegex = /^\d+$/
const pwdRegex = /^.{8}\w*/
const cityRegex = /^[A-Za-z]{1}[a-z]+$/

const checkRegex = (value, regex)=>{
    return regex.test(value);
}

const check = (value, regex, errorNo) =>{
    if(value && !checkRegex(value, regex)){
        error[errorNo].style.display="block";
    }
    else{
        error[errorNo].style.display="none";
    }

}
phno.addEventListener("input", ()=>{
    check(phno.value, PhoneRegex, 0)
})
age.addEventListener("input", ()=>{
    check(age.value, ageRegex, 1)
})
email.addEventListener("input", ()=>{
    check(email.value, EmailRegex, 2)
})
pwd.addEventListener("input", ()=>{
    check(pwd.value, pwdRegex, 3)
})
Name.addEventListener("input", ()=>{
    check(Name.value, nameRegex, 5)
})
city.addEventListener("input", ()=>{
    check(city.value, cityRegex, 6)
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("here")
    for(let i=0; i<inputfields.length; i++){
        if(!inputfields[i].value || !EduQual.value){
            incomp.style.display = "block"
            error[4].style.display = "none"
            return;
        }
    }
    const errorArray = [];
    for(let i = 0 ; i<error.length; i++){
        errorArray.push(error[i]);
    }  
    if(errorArray.filter((errors) => errors.style.display === "block") === []) {
        incomp.style.display = "block"
        return;
    }
    incomp.style.display = "none"
    if(pwd.value != confirmpwd.value) {
        error[4].style.display = "block"
        return;
    }
    error[4].style.display = "None"
})