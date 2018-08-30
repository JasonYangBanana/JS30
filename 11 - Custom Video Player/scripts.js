let player = document.querySelector('.player');
let toggle = player.querySelector('.toggle');
let video = player.querySelector('.viewer');
let skipButtons = player.querySelectorAll('[data-skip]');
let handlers = player.querySelectorAll('[type="range"]');
let progressBar = player.querySelector('.progress');
let currentBar = player.querySelector('.progress__filled');

function togglePlay(e) {
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();
    video.paused ? video.play() : video.pause();
    // e.stopPropagation();
}

function changeButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handlerChange() {
    video[this.name] = this.value;
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

function doubleClickScreen(e) {
    if (e.offsetX > this.offsetWidth / 2) {
        video.currentTime += 10;
    } else {
        video.currentTime -= 10;
    }
}

/* 點擊bar時暫停 */
function clickProgressBar(e) {
    const dragTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = dragTime;
    mousedown = !mousedown;
    const method = (e.buttons === 0) ? 'play' : 'pause';
    video[method]();
    if (!video.paused) {
        video.pause();
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
progressBar.addEventListener('mousedown', clickProgressBar);
progressBar.addEventListener('mousemove', drag);
progressBar.addEventListener('mouseup', clickProgressBar);



// console.log(player, toggle);