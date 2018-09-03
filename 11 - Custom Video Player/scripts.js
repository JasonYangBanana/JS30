let player = document.querySelector('.player');
let toggle = player.querySelector('.toggle');
let video = player.querySelector('.viewer');
let skipButtons = player.querySelectorAll('[data-skip]');
let handlers = player.querySelectorAll('[type="range"]');
let progressBar = player.querySelector('.progress');
let currentBar = player.querySelector('.progress__filled');
let fullScreen = player.querySelector('.full-screen');

function togglePlay() {
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();
    video.paused ? video.play() : video.pause();
    // e.stopPropagation();
}
function changeButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function handlerChange() {
    video[this.name] = this.value;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
function doubleClickScreen(e) {
    const skipTime = (e.offsetX > this.offsetWidth / 2) ? '10' : '-10';
    video.currentTime += parseFloat(skipTime);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    currentBar.style.flexBasis = `${percent}%`;
}
function drag(e) {
    if (mousedown) {
        const dragTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
        video.currentTime = dragTime;
    }
}

/* 點擊bar時暫停 */
function clickProgressBar(e) {
    const dragTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = dragTime;
    mousedown = !mousedown;
}
function toggleFullScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('dblclick', doubleClickScreen);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton => skipButton.addEventListener('click' ,skip));

handlers.forEach(handler => handler.addEventListener('change', handlerChange));
handlers.forEach(handler => handler.addEventListener('mousemove', handlerChange));

let mousedown = false;
progressBar.addEventListener('mousemove', drag);
progressBar.addEventListener('mousedown', clickProgressBar);
progressBar.addEventListener('mouseup', clickProgressBar);

fullScreen.addEventListener('click', toggleFullScreen);
