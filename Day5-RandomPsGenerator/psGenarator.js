const btnEl=document.getElementById("btn")
const inputEl=document.getElementById("input")
const copyIcon=document.querySelector(".fa-copy")
const alert_container =document.querySelector(".alert_container")

btnEl.addEventListener("click",()=>{
    createPassword()
})
function createPassword(){
    const chars=
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVW!@#$%^&*()_+?:{}[]";
    const passwordLength=8;
    let password="";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        password+=chars.substring(randomNum,randomNum+1)
        
    }
    inputEl.value=password;
    alert_container.innerText= password+"copied!"
}
copyIcon.addEventListener("click",()=>{
    copycode()
    if(inputEl.value){
        alert_container.classList.remove("active")
        setTimeout(()=>{
            alert_container.classList.add("active")
    
        },2000)
    }
  
    
})
function copycode(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
   
}