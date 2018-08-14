function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //keydown without a,s,d,f,g,h,j,k,l
    audio.currentTime = 0; //set the currentTime to start
    audio.play();
    key.classList.add("playing");
};
function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
    //e.target.classList.remove("playing");
};

window.addEventListener('keydown', playSound);
let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));