let {log}=console;

const newYears='1 jan 2022';

const daysEl=document.querySelector("#days")
const hoursEl=document.querySelector("#hours")
const minutesEl=document.querySelector("#seconds")
const secondsEl=document.querySelector("#minutes")


function CountDown(){
    const newYearsdate=new Date(newYears);
    const currentDate=new Date();
    const totalSeconds=(newYearsdate-currentDate)/1000;
    //  ----------format----------//
    const days=Math.floor(totalSeconds / (3600*24));
    const hours=Math.floor(totalSeconds % (3600*24) / 3600);
    const minutes=Math.floor(totalSeconds /60)%60;
    const Seconds=Math.floor(totalSeconds)%60;
    //  -----------element---------//
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minutesEl.innerHTML=format(minutes);
    secondsEl.innerHTML=format(Seconds);
}

function format(time){
    return time<10?(`0 ${time}`):time;
}



setInterval(CountDown,1000)