const button=document.querySelectorAll("button");

button.forEach(btn =>{
    btn.addEventListener("click",()=>{
       btn.innerText="x"
      
       btn.style.padding="32px"
    })
   
})



