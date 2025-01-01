
let CustomDate = 'Global'
CustomDate = "2024-12-31T00:00:00";

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const hide = document.getElementById("navDialog");
    hide.style.display = "flex";
    const input1 = document.getElementById("year");
    const input2 = document.getElementById("month");
    const input3 = document.getElementById("din");

    const year = input1.value;
    const month = input2.value;
    const day = input3.value;

    CustomDate =year+"-"+month+"-"+day+"T00:00:00";

dateCalc(CustomDate, "Days1", "Hour1", "Minute1", "Second1");

});

//  function getInput(){
// const year = document.getElementById("year").value;
// const month = document.getElementById("month").value;
// const day = document.getElementById("din").value;
// if(year>=2024){
//     hide.style.display = "flex";
// }

// CustomDate =year+"-"+month+"-"+day+"T00:00:00";

// dateCalc(CustomDate, "Days1", "Hour1", "Minute1", "Second1");

// };



function dateCalc(d, d1, h, m, s){
    const date1 = new Date();
const date2 = new Date(d);

const date = date2-date1;

const days = Math.floor(date/(1000*60*60*24));

const hour = Math.floor((date/(1000*60*60))%24);

const minute = Math.floor((date/(1000*60))%60);
const second = Math.floor((date/(1000))%60);

document.getElementById(d1).innerHTML = days;

document.getElementById(h).innerHTML = hour;

document.getElementById(m).innerHTML = minute;

document.getElementById(s).innerHTML = second;
};


function Updatedate(){
    dateCalc("2028-07-14T00:00:00","Days", "Hour", "Minute", "Second");
    dateCalc("2025-03-14T00:00:00","Days2", "Hour2", "Minute2", "Second2");
    dateCalc("2026-06-11T00:00:00","Days3", "Hour3", "Minute3", "Second3");
};

function hourCalc(d, h){
    const hours = document.getElementById(h);
    const date1 = new Date();
    const date2 = new Date(d);

    const date = date2-date1;

    const hour = Math.floor((date/(1000*60*60))%24);
    hours.innerHTML = hour;
};

function minuteCalc(d, m){
const minutes = document.getElementById(m);
const date1 = new Date();
const date2 = new Date(d);

const date = date2-date1;

const minute = Math.floor((date/(1000*60))%60);
minutes.innerHTML = minute;
};

function secondCalc(d, s){
    const seconds = document.getElementById(s);
    const date1 = new Date();
    const date2 = new Date(d);

    const date = date2-date1;

    const second = Math.floor((date/(1000))%60);
    seconds.innerHTML = second;
};

function updateSec(){
    secondCalc("2028-07-14T00:00:00", "Second");
    secondCalc("2025-03-14T00:00:00", "Second2");
    secondCalc("2026-06-11T00:00:00", "Second3");
    secondCalc(CustomDate, "Second1");
}

function updateMin(){
    minuteCalc("2028-07-14T00:00:00", "Minute");
    minuteCalc("2025-03-14T00:00:00", "Minute2");
    minuteCalc("2026-06-11T00:00:00", "Minute3");
    minuteCalc(CustomDate, "Minute1");
};

function updateHour(){
    hourCalc("2028-07-14T00:00:00", "Hour");
    hourCalc("2025-03-14T00:00:00", "Hour2");
    hourCalc("2026-06-11T00:00:00", "Hour3");
    hourCalc(CustomDate, "Hour1");
};


Updatedate();
setInterval(updateMin, 6000);
setInterval(updateSec, 1000);
setInterval(updateHour, 3600000);





