let hours=document.querySelector('.hour')
console.log(hours)
let minutes=document.querySelector('.minute')
console.log(minutes)
let seconds=document.querySelector('.second')
console.log(seconds)

let clock=()=>{
    let currentdate=new Date();

    let gethour=currentdate.getHours()
    let getminute=currentdate.getMinutes()
    let getsecond=currentdate.getSeconds()

    hours.textContent=gethour
    minutes.textContent=getminute
    seconds.textContent=getsecond
}

setInterval(clock)