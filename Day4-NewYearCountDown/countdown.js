const dayEl=document.getElementById("day")
const hrsEl=document.getElementById("hrs")
const minEl=document.getElementById("min")
const secEl=document.getElementById("sec")

const newYearTime=new Date("Jan 1, 2024 00:00:00").getTime()
updateCountdown()

function updateCountdown(){
    const now=new Date().getTime();
    const gap=newYearTime-now;
    const seconds=1000;
    const minute=seconds*60;
    const hour=minute*60;
    const day=hour*24;
    const d=Math.floor(gap/day);
    const h=Math.floor((gap%day)/hour);
    const m=Math.floor((gap%hour)/minute);
    const s=Math.floor((gap%minute)/seconds);
    dayEl.innerText=d
    hrsEl.innerText=h
    minEl.innerText=m
    secEl.innerText=s
    setTimeout(updateCountdown,1000)

}