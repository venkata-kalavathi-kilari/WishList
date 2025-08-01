let formData =document.querySelector(".form");
let submitButton =document.querySelector(".button");
let errorMessages=document.querySelectorAll(".error-message");
let emptyfieldMessages=document.querySelectorAll(".empty-field");
let showPasswordBtns =document.querySelectorAll(".btn");

let firstName,lastName,email,password;
let fnTarget,lnTarget,emailTarget,pwdTarget;
let field;
let fnFlag,lnFlag,emailFlag,pwdFlag;

let nameRegularExpression=/^[a-z]+$/i;
let emailRegularExpression=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegularExpression= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}


for(let emptyfieldMessage of emptyfieldMessages){
    emptyfieldMessage.classList.add("d-none");
}

formData.addEventListener("keyup",(event)=>{
    event.preventDefault();
    field=event.target.dataset.key;
    switch (field){
        case "firstName":
            firstName=event.target.value;
            fnTarget=event.target;
            break;
        case "lastName":
            lastName=event.target.value;
            lnTarget=event.target;
            break;
        case "email":
            email=event.target.value;
            emailTarget=event.target;
            break;
        case "password":
            password=event.target.value;
            pwdTarget=event.target;
            break;  
        default:
            firstName=lastName=email=password="";
            break;             
    }
});


submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(firstName,lastName,email,password);

    if(firstName){
         emptyfieldMessages[0].classList.add("d-none");
        if(!nameRegularExpression.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            fnFlag=false;
        }else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            fnFlag=true;
        }
    }else{
        emptyfieldMessages[0].classList.remove("d-none");
    }

    if(lastName){
        emptyfieldMessages[1].classList.add("d-none");
        if(!nameRegularExpression.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            lnFlag=false;
        }else{
            lnTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");
            lnFlag=true;
        }
    }else{
        emptyfieldMessages[1].classList.remove("d-none");
    }

    if(email){
        emptyfieldMessages[2].classList.add("d-none");
        if(!emailRegularExpression.test(email)){
            emailTarget.classList.add("error");
             errorMessages[2].classList.remove("d-none");
             emailFlag=false;
        }else{
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
            emailFlag=true;
        }
    }else{
        emptyfieldMessages[2].classList.remove("d-none");
    }

    if(password){
        emptyfieldMessages[3].classList.add("d-none");
        if(!passwordRegularExpression.test(password)){
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
            pwdFlag=false;
        }else{
            pwdTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none");
            pwdFlag=true;
        }
    }else{
        emptyfieldMessages[3].classList.remove("d-none");
    }
    
    if(fnFlag && lnFlag && emailFlag && pwdFlag){
        fnTarget.value=lnTarget.value=emailTarget.value=pwdTarget.value="";
        window.location.href="/success.html"
    }
});


showPasswordBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        let input = btn.closest("label").querySelector("input");
        if (input.getAttribute("type") === "password") {
            input.setAttribute("type", "text");
        } else {
            input.setAttribute("type", "password");
        }
    });
});
