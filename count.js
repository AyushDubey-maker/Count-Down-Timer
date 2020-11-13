const newYears='1 Jan 2021'
const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minsE1=document.getElementById('mins');
const secondsE1=document.getElementById('seconds');


const dayC=document.getElementById('days1');
const month=document.getElementById('month');
const year=document.getElementById('year');

function countDown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const totalseconds=(newYearsDate-currentDate)/1000;
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const minutes=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;

    // console.log(days,hours,minutes,seconds);
    daysE1.innerHTML=days;
    hoursE1.innerHTML=hours;
    minsE1.innerHTML=formatTime(minutes);
    secondsE1.innerHTML=formatTime(seconds);
}

function formatTime(time){
    if(time<10){
        return `0${time}`;
    }else{
        return time;
    }
}
//Initial Call.
countDown();
todaycountDown();
setInterval(countDown,1000);
setInterval(todaycountDown,1000);


function todaycountDown(){
    var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                console.log(datetime)
              dayC.innerHTML=currentdate.getDate();
              //To get current Month add 1.
              month.innerHTML=currentdate.getMonth()+1;
              year.innerHTML=currentdate.getFullYear();
}

