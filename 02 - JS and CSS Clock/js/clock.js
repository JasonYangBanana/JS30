//let hand = document.querySelector('.hand');
let secHand = document.querySelectorAll('.second-hand');
let minHand = document.querySelectorAll('.min-hand');
let hrHand = document.querySelectorAll('.hour-hand');
let now = new Date();
let secs = now.getSeconds();
let mins = now.getMinutes();
let hrs = now.getHours();
let round = 0;
let secCount = 0

let dayNightNodelist = document.querySelectorAll('.day-and-night');
let dayNight = Array.from(dayNightNodelist);
let taipeiHr = hrs;
let londonHr = hrs - 7;
let tokyoHr = hrs - 1;

taipeiHr > 0 ? dayNight[0].innerHTML = "A.M." : dayNight[0].innerHTML = "P.M.";
londonHr > 0 ? dayNight[1].innerHTML = "A.M." : dayNight[1].innerHTML = "P.M.";
tokyoHr > 0 ? dayNight[2].innerHTML = "A.M." : dayNight[2].innerHTML = "P.M.";

function setDate() {
    if (secs === 0) {
        round++;
    }
    //90deg是將指針從9時移動到12時
    //secCount是每一秒的位移量
    let secsDegree = (secs + secCount + 60 * round) * 360 / 60 + 90;
    let minsDegree = (mins) * 360 / 60 + (secs + secCount) * 360 / 60 / 60 + 90;
    let hrsDegree = (hrs) * 360 / 12 + mins * 360 / 60 / 12 + (secs + secCount) * 360 / 60 / 60 / 12 + 90;
    secCount += 1;
    secHand[0].style.transform = `rotate(${secsDegree}deg)`;
    minHand[0].style.transform = `rotate(${minsDegree}deg)`;
    hrHand[0].style.transform = `rotate(${hrsDegree}deg)`;
    secHand[1].style.transform = `rotate(${secsDegree}deg)`;
    minHand[1].style.transform = `rotate(${minsDegree}deg)`;
    hrHand[1].style.transform = `rotate(${hrsDegree - 210}deg)`;
    secHand[2].style.transform = `rotate(${secsDegree}deg)`;
    minHand[2].style.transform = `rotate(${minsDegree}deg)`;
    hrHand[2].style.transform = `rotate(${hrsDegree - 30}deg)`;
}
setInterval(setDate, 1000);