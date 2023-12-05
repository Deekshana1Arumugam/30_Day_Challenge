const starsEL=document.querySelectorAll(".fa-star")

const emojisEl=document.querySelectorAll(".fa-regular")

const colorsArr =["red","rgb(16, 82, 141)","rgb(173, 14, 144)","darkgreen","orange"]

updateRating(-1)
starsEL.forEach((starEL, index) => {
    starEL.addEventListener("click",() => {
updateRating(index)

    })
})
function updateRating(index){
    starsEL.forEach((starEL, idx) => {
if(idx < index + 1){
starEL.classList.add("first")
}
else{
   starEL.classList.remove("first")
}
    })
    emojisEl.forEach(emojiEl=>{
        emojiEl.style.transform =`translateX(-${index * 50}px)`
        emojiEl.style.color= colorsArr[index]

    })
}