//let hand = document.querySelector('.hand');
let secHand = document.querySelector('.second-hand');
let minHand = document.querySelector('.min-hand');
let hrHand = document.querySelectorAll('.hour-hand');
let now = new Date();
let secs = now.getSeconds();
let mins = now.getMinutes();
let hrs = now.getHours();
console.log(hrs);
let secCount = 0

let dayNight= document.querySelectorAll('.day-and-night');
// let dayNight = Array.from(dayNightNodelist);
let taipeiHr = hrs;
let londonHr = hrs - 7;
let tokyoHr = hrs + 1;

taipeiHr - 12 < 0 ? dayNight[0].innerHTML = "A.M." : dayNight[0].innerHTML = "P.M.";
londonHr - 12 < 0 ? dayNight[1].innerHTML = "A.M." : dayNight[1].innerHTML = "P.M.";
tokyoHr - 12 < 0 ? dayNight[2].innerHTML = "A.M." : dayNight[2].innerHTML = "P.M.";

function setDate() {
    
    //90deg是將指針從9時移動到12時
    //secCount是每一秒的位移量
    let secsDegree = (secs + secCount) * 360 / 60 + 90;
    let minsDegree = (mins) * 360 / 60 + (secs + secCount) * 360 / 60 / 60 + 90;
    let hrsDegree = (hrs) * 360 / 12 + mins * 360 / 60 / 12 + (secs + secCount) * 360 / 60 / 60 / 12 + 90;
    secCount += 1;
    secHand.style.transform = `rotate(${secsDegree}deg)`;
    minHand.style.transform = `rotate(${minsDegree}deg)`;
    hrHand.forEach(function (value, index, listObj) {
        if (index === 0) {
            value.style.transform = `rotate(${hrsDegree}deg)`;
            return;
        };
        if (index === 1) {
            value.style.transform = `rotate(${hrsDegree - 210}deg)`;
            return;
        };
        if (index === 2) {
            value.style.transform = `rotate(${hrsDegree + 30}deg)`;
            return;
        };
    });
}
setDate();
setInterval(setDate, 1000);