function validity(userEmail){
    const emailRegex = /^\w+\.\w+@\w+\.\w+$/
    return emailRegex.test(userEmail);
}

document.getElementById('submit').addEventListener('click', (event) =>{
    event.preventDefault();
    //console.log("here")
    let userEmail = document.getElementById('email').value
    let pwd = document.getElementById('pwd').value;
    let confirmpwd = document.getElementById('confirmpwd').value
    let emailError = document.getElementById('emailError')
    let pwdError = document.getElementById('pwdError')

    if(!validity(userEmail)){
        emailError.innerHTML = "Please enter a valid Email";
        return;
    }
    else emailError.innerHTML = ""

    if(pwd != confirmpwd){
        pwdError.innerHTML = "Please re-enter password correctly";
        return;
    }
    else pwdError.innerHTML = "" 

    let data = {
        email: userEmail,
        password : pwd,
    }

    //implementation without async-await

    let options = {
        method: "POST",
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data),
    }

    fetch("https://reqres.in/api/login", options)
    .then((response)=>{
        console.log(response.status)
        return response.json();
    })
    .then((json)=>{
        console.log(json);
        document.getElementById('sign-in').reset()
    })

    //Implementation using async-await

    // const sendData = async () => {
    //     let options = {
    //     method: "POST",
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data),
    // };

    //     let fetchAPI = await fetch('https://reqres.in/api/login', options);
    //     let response = await fetchAPI.json();
    //     return response;
    // } 

    // const main = async () => {
    //     let data = await sendData();
    //     console.log(data);
    // }

    // main();
})