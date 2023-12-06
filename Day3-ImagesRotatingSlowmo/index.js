const btnP=document.getElementById("prev")
const btnN=document.getElementById("next")
const imgContainer=document.querySelector(".container")
const img=document.getElementById
let x=0;
let timer
btnP.addEventListener("click",()=>{
    x = x + 45
    clearTimeout(timer)
updateGallery()
})
function updateGallery(){
    imgContainer.style.transform=`perspective(1000px) rotateY(${x}deg)`
    
}
btnN.addEventListener("click",()=>{
    x = x - 45
    clearTimeout(timer)
updateGallery()
})
function updateGallery(){
    imgContainer.style.transform=`perspective(1000px) rotateY(${x}deg)`
   timer= setTimeout(()=>{
        x=x-45;
        updateGallery()

    },4000)
}
updateGallery()