const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(mediaStream => {
            console.log(mediaStream);
            // mediaStream = new MediaStream();
            try {
                video.srcObject = mediaStream;
            } catch (err) {
                video.src = window.URL.createObjectURL(mediaStream);
            }
            video.play();
        });
};


function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    console.log(width, height);
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        //取出pixels
        let pixels = ctx.getImageData(0, 0, width, height);
        //做效果
        // pixels = redEffect(pixels);
        // pixels = redSplit(pixels);
        // pixels = greenScreen(pixels);
        horizontalFlip = horizontalFlip(pixels);
        // pixels = negativeEffect(pixels);
        // pixels = grayscaleEffect(pixels);
        // ctx.globalAlpha = 0.05;
        //放回
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}
/* 泛紅 */
function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] += 100;//red
        pixels.data[i + 1] -= 100;//green
        pixels.data[i + 2] *= 0.5;//blue
    }
    return pixels;
}


function redSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; //red
        pixels.data[i + 500] = pixels.data[i + 1]; //green
        pixels.data[i - 550] = pixels.data[i + 2]; //blue
    }
    return pixels;
}

/* 負片 */
function negativeEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4){
        pixels.data[i + 0] = 255 - pixels.data[i + 0]; //red
        pixels.data[i + 1] = 255 - pixels.data[i + 1]; //green
        pixels.data[i + 2] = 255 - pixels.data[i + 2]; //blue
    }
    return pixels;
}
/* 灰階 */
function grayscaleEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        let avg = (pixels.data[i + 0] + pixels.data[i + 1] + pixels.data[i + 2]) / 3;
        pixels.data[i + 0] = avg; //red
        pixels.data[i + 1] = avg; //green
        pixels.data[i + 2] = avg; //blue
    }
    return pixels;
}
// /* 鏡像效果 */
// function mirror(pixels, width, height) {
//     for (let i = 0; i < pixels.data.length; i += 4) {
//         let newPoint = 
//     }
// }

/* 水平翻轉效果 */
function horizontalFlip(pixels) {
    let newPixels = [];
    for (let i = 0; i < pixels.data.length; i += 4){
        let iMirror = (width - ((i / 4) % width)) * 4 + Math.floor(i / 4 / width) * 4 * width;
        pixels.data[i + 0] = pixels.data[iMirror + 0]; // red
        pixels.data[i + 1] = pixels.data[iMirror + 1]; // green
        pixels.data[i + 2] = pixels.data[iMirror + 2]; // blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};
    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });
    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];
        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }
    return pixels;
}

function takePhoto() {
    //play the sound
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man">`
    strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener('canplay', paintToCanvas);