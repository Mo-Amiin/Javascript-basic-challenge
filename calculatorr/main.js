// let {log}=console;
// let history=document.querySelector(".history-icon");
// let historyPage=document.querySelector(".history-page");
// let opeInput=document.querySelector("#ope-input");
// let resInput=document.querySelector("#res-input");
// let button=document.querySelectorAll("button");
// let valueOne=0;
// let valueTwo=0;
// let operation='';
// let option2=false

// history.addEventListener("click",()=>{
//     historyPage.classList.toggle("active");  
// })

// button.forEach(btn =>{
//     btn.addEventListener("click",()=>{
//       if(btn.classList.contains('operation')){
//         // operation 
//        if(btn.value !='='){
//          option2=true;
//          valueOne=opeInput.value
//          operation=btn.value;
//        }else{
//            if(option2){
          
//            }
//        }

//       }

//       if(btn.classList.contains('clear') || btn.classList.contains('clear-all')){
//          // clears

//       }
//       else{
//           // numbers
//           if(option2){
//             valueTwo == 0 ? valueTwo=btn.value:valueTwo+=btn.value;
//             opeInput.value=`${valueOne} ${operation} ${valueTwo}`;
//           }else{
//             opeInput.value ==0 ?opeInput.value=btn.value
//             :opeInput.value+=btn.value;
  
//             valueOne+=btn.value;
//           }
        
         
//       }

//     })
// })




















let button =document.querySelectorAll("button");
let resInput=document.querySelector("#res-input");
let opInput=document.querySelector("#ope-input")
let histroryIcon=document.querySelector(".history-icon")
let historyOperation=document.querySelector(".history-operation");

let histroryPage=document.querySelector(".history-page")

let valueOne=0;
let valueTwo=0
let Operation='';
let option2=false;

let allOperation=(JSON.parse(localStorage.getItem("operations")) || []);
showHistroy()
histroryIcon.addEventListener("click",()=>{
    histroryPage.classList.toggle('active')
})


button.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
       if(btn.classList.contains("clear") || btn.classList.     contains("clear-all")){   
           // clear and Clear All
           if(btn.classList.contains('clear')){
               if(resInput.value>0){
                   clearInput(resInput)
               }else{
                   clearInput(opInput)
               }
           }else{
               clearAll();
           }


       }else if(btn.classList.contains('operation')){
           // Operations
          if(btn.value != "="){
            option2=true;
            valueOne= opInput.value;
            Operation=btn.value;
          }else{
              if(option2){
                  let sum=`${(valueOne)} ${Operation} ${valueTwo}`;
                  resInput.value= `${eval(sum)}`;
                  valueTwo=0;
                  valueOne=0;
                  Operation='';

                  let cuurrentOperation={
                      vall:valueOne,
                      op:Operation,
                      val2:valueTwo,
                  }

                  allOperation.push(cuurrentOperation);

                  localStorage.setItem("operations",JSON.stringify(allOperation));
              }
              }
       }else{
           // numbers 
           if(option2){
               valueTwo ==0 ? valueTwo=btn.value : valueTwo+=btn.value;
               opInput.value =`${valueOne} ${Operation} ${valueTwo}`
           }else{
            opInput.value == 0 ? opInput.value= btn.value : opInput.value+=  btn.value;
            valueOne=btn.value;

           }
       }
    })
})

function clearInput(input){
    let currentResult=input.value.split("");
    let lat =currentResult.pop();
    if(currentResult.length >0 ){
        input.value=currentResult.join("");
    }else{
        input.value=0;
        option2=false;
        valueOne=0;
        valueTwo=0;
        Operation=0;
    
    }
}

function clearAll(){
    opInput.value=0;
    option2=false;
    valueOne=0;
    valueTwo=0;
    Operation=0;
    resInput.value=0

}

function showHistroy(){
    let ops='';
    if(allOperation.length>0){
        allOperation.forEach(op =>{
            let curent=`${op.vall} ${op.op} ${op.val2}`
            ops+=`<div class="history-elements">

            <input type="text" name="" class="calc-his" value="${op.vall}" value="${op.val2}"  disabled>

            <input type="text" name="" class="calc-his" value="${eval(op.val1,op.op,op.val2)}"   disabled>
            
            </div><hr>
            
            `
        });
    }else{
        ops="   <h5>we dont have any Histroy</h5>"
    }
    historyOperation.innerHTML=ops;
}


