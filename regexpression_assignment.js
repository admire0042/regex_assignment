let firstName = document.getElementById("firstName");
let lastName =  document.getElementById("lastName");
let dateOfBirth =  document.getElementById("dateOfBirth");
let email     =  document.getElementById("email");
let telephone =  document.getElementById("telephone");
let password =  document.getElementById("password");
let confirmPassword =  document.getElementById("confirmPassword");


let firstN = document.getElementById("firstN");
let lName = document.getElementById("lName");
let dob = document.getElementById("dob");
let emailP = document.getElementById("emailP");
let tele = document.getElementById("tele");
let pass = document.getElementById("pass");
let confirmP = document.getElementById("confirmP");

console.log(lastName)
firstName.addEventListener("keyup", validate)
lastName.addEventListener("keyup", validate2)
dateOfBirth.addEventListener("keyup", validate3)
email.addEventListener("keyup", validate4)
telephone.addEventListener("keyup", validate5)
password.addEventListener("keyup", validate6)
confirmPassword.addEventListener("keyup", validate)

let firstName1 = firstName.value;

function validate(e){
   
    let regexp =/^[a-zA-Z]{2,}$/;
    let pattern = new RegExp(regexp,"i")

        let typing = e.target.value;
        console.log(pattern.test(typing))
    console.log(e.target.attributes.name.value)

    if(pattern.test(typing)){
            firstName.style.borderColor="green"
            
    }else{
        firstName.style.borderColor="red"
            firstN.innerText="First name must be alphabets only and more than two"
    }
}

// let lastName1 = lastName.value;

function validate2(e){
   
    let regexp2 =/^[a-zA-Z]{2,}$/;
    let pattern2 = new RegExp(regexp2,"i")

        let typing2 = e.target.value;
        console.log(pattern2.test(typing2))
    console.log(e.target.attributes.name.value)

    if(pattern2.test(typing2)){
            lastName.style.borderColor="green"
            
    }else{
        lastName.style.borderColor="red"
        lName.innerText="Last name must be alphabets only and more than two"
    }
}

let dateOfBirth1 = dateOfBirth.value;

function validate3(e){
   
    let regexp3 =/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./]([0]?[1-9]|[1][0-2])[./]([0-9]{4}|[0-9]{2})$/;
    let pattern3 = new RegExp(regexp3,"i")

        let typing3 = e.target.value;
        console.log(pattern3.test(typing3))
    console.log(e.target.attributes.name.value)

    if(pattern3.test(typing3)){
            dateOfBirth.style.borderColor="green"
            
    }else{
        dateOfBirth.style.borderColor="red"
            dob.innerText="Enter your date of birth in the form d/m/y"
    }
}


let email1 = email.value;

function validate4(e){
   
    let regexp4 =/^([a-z\d-_\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    let pattern4 = new RegExp(regexp4,"i")

        let typing4 = e.target.value;
        console.log(pattern4.test(typing4))
    console.log(e.target.attributes.name.value)

    if(pattern4.test(typing4)){
            email.style.borderColor="green"
            
    }else{
        firstName.style.borderColor="red"
            emailP.innerText="Email must be a valid address, e.g myself@mydomain.com"
    }
}


let telephone1 = telephone.value;

function validate5(e){
   
    let regexp5 =/^[0][7-9][0-1][\d]{8}$/;
    let pattern5 = new RegExp(regexp5,"i")

        let typing5 = e.target.value;
        console.log(pattern5.test(typing5))
    console.log(e.target.attributes.name.value)

    if(pattern5.test(typing5)){
            telephone.style.borderColor="green"
           
    }else{
            telephone.style.borderColor="red"
            tele.innerText="Telephone must be a valid Nigeria number"
    }
}


let password1 = password.value;

function validate6(e){
   
    let regexp6 =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
    let pattern6 = new RegExp(regexp6,"i")

        let typing6 = e.target.value;
        console.log(pattern6.test(typing6))
    console.log(e.target.attributes.name.value)

    if(pattern6.test(typing6)){
            password.style.borderColor="green"
          
    }else{
        password.style.borderColor="red"
            pass.innerText="Password must contain at least one upper case, one lower case, one digit and one speecial case"
    }
}


let confirmPassword1 = confirmPassword.value;

function validate(e){
   
    let regexp7 =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
    let pattern7 = new RegExp(regexp7,"i")

        let typing7 = e.target.value;
        console.log(pattern7.test(typing7))
    console.log(e.target.attributes.name.value)

    if(pattern7.test(typing7)){
            confirmP.style.borderColor="green"
           
    }else{
        confirmPassword.style.borderColor="red"
        confirmP.innerText="The password does not match"
    }
}

