let {log}=console;

const userName=document.querySelector("#username")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const confirmPassword=document.querySelector("#ConfirmPassword")
const form=document.querySelector(".form")

function showSuccess(element){
    let parentElement=element.parentElement;
    element.style.border='2px solid green';
    let success=parentElement.querySelector(".fa-check");
    success.style.display='block';
    let err=parentElement.querySelector(".fa-times");
    err.style.display='none'
    let small=parentElement.querySelector("small");
    small.style.display='none';

}
function showError(element,messege){
    let parentelement=element.parentElement;
    element.style.border='2px solid red';
    let small=parentelement.querySelector("small");
    small.innerText=messege;
    small.style.display='block';
    let error=parentelement.querySelector(".fa-times");
    error.style.display='block';
    let success=parentelement.querySelector(".fa-check");
    success.style.display='none';

}
function checkEpmty(elements,messege){
    elements.forEach(element => {
        let parentElement=element.parentElement;
        if(element.value==''){
           element.style.border='2px solid #d66346bd';
           let error=parentElement.querySelector(".fa-times");
           error.style.display='block';
           let small=parentElement.querySelector("small");
           small.innerText=messege;
           small.style.display='block';
        
        }else{
            if(element.value){
                element.style.border='2px solid #31ca15';
                let success=parentElement.querySelector(".fa-check");
                success.style.display='block';
               let err=parentElement.querySelector(".fa-times");
               err.style.display='none'
               let small=parentElement.querySelector("small");
               small.style.display='none';
     
             }
        }
    });

}

const checkUserName=userName=>{
    // userName.addEventListener("keyup",()=>{
        let userValue=userName.value.trim().split(" ");
        
        if(userValue.length >=3 ){
            showSuccess(userName)
         
         
        }else{
            showError(userName,'fill fullName');
        }
    
  
}

function  checkEmail(email){
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email.addEventListener("keyup",()=>{
        if(reg.test(email.value)){
            showSuccess(email)
            log("email is correct")
        }else{
            showError(email,'email is incorrect')
            log("email is incorrect")
        }
    })
  
}

function checkPassword(password,max=20,min=6){
   password.addEventListener("keyup",()=>{
    if(password.value.length>=min && password.value.length<=max){    
        showSuccess(password,`at least ${min} up to ${max}`);
   }else{
       showError(password,`at least ${min} up tp  ${max} charrectres`)
   }
   })
  
}

function checkConfirmPassword(password,confirmPassword){
    if(confirmPassword.value &&  confirmPassword.value == password.value){
        showSuccess(confirmPassword);
    }else{
        showError(confirmPassword,'password is not mach')
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkEpmty([userName,email,password,confirmPassword],"input required");
    checkUserName(userName);
    checkEmail(email,'email is incorrect');
    checkPassword(password);
    checkConfirmPassword(password,confirmPassword);

})


























// const showError=(input,message)=>{
//     let parentElemet=element.parentElement;
//     input.forEach(element =>{
//         if(element.value===""){
//             element.parentElement.classList='form-control error ';
//             let small=parentElemet.querySelector("small");     
//             small.innerText=message
//             small.style.display='block';
       

//         }  
//      })
  
// }
// const showSuccess=(elements)=>{
//     elements.forEach(element =>{
//         let parentElemet=element.parentElement;
//         if(element.value){
//             element.parentElement.classList='form-control success '
//             let small=parentElemet.querySelector("small");  
//             let check=parentElemet.querySelectorAll(".fas")[0];
//             check.style.display='block'
//             small.innerText=''
//             small.style.display='block';
//         }  
//      })
// }
// const showCheckEmpty=(element)=>{
//     element.forEach(element =>{
//         if(element.value==''){
//             showError(element,"input requirded")
//         }else{
//             showSuccess(element)
//         }
//     })

// }

// const checkEmail=(email)=>{
//       const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       if(reg.test(email.value)){
//           showSuccess(email);
//       }else{
//           showError(email,"Invalid Email");
//       }
  


// }




// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     showCheckEmpty([userName,password,confirmPassword,email]);
    
//     checkEmail(email);
    
// })