const timerButtons = document.querySelectorAll('.timer__button');
const displayTimeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');
const minInput = document.querySelector('#custom');
const player = document.querySelector('.player')
let countDown;

function timer(timeDiff) {
    clearInterval(countDown);
    const now = new Date().getTime();
    const nowSec = Math.round(now / 1000);
    const endMillionSec = (nowSec + timeDiff) * 1000;

    showTimeLeft(timeDiff);
    showEndTime(endMillionSec);
    countDown = setInterval(function () {
        secondLeft = Math.round((endMillionSec - Date.now()) / 1000);
        if (secondLeft < 0) {
            clearInterval(countDown);
            player.currentTime = 0;
            player.play();
            return;
        }
        showTimeLeft(secondLeft);
    }, 1000);
}

function timerStart() {
    const timeDiff = Number(this.dataset.time);
    timer(timeDiff);
}

function showTimeLeft(secondLeft) {
    const minLeft = Math.floor(secondLeft / 60);
    secondLeft %= 60;
    const timeLeft = `${minLeft}:${secondLeft < 10 ? '0': ''}${secondLeft}`;
    displayTimeLeft.textContent = timeLeft;
}
function showEndTime(endMillionSec) {
    const end = new Date(endMillionSec)
    let endHr = end.getHours();
    let endMin = end.getMinutes();
    const endTime = `計時器將在${endHr}:${endMin < 10 ? '0':''}${endMin}到期`;
    displayEndTime.textContent = endTime;
}

timerButtons.forEach(btn => btn.addEventListener('click', timerStart));
minInput.addEventListener('submit', function (e) {
    e.preventDefault();
    const timeDiff = this.minutes.value;
    timer(timeDiff * 60);
    this.reset();
});