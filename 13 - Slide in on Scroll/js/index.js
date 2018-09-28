function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const slideImages = document.querySelectorAll('.slide-in');
function checkSlide() {
    slideImages.forEach(slideImage => {
        //視窗底部往上"圖片一半高"
        const slideinAt = window.scrollY + window.innerHeight - slideImage.height / 2;
        console.log(slideImage, slideImage.height);
        //image的底部
        const imageBottom = slideImage.offsetTop + slideImage.height;
        const isHalfShown = slideinAt > slideImage.offsetTop;
        const isNotScrolldedPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolldedPast) {
            slideImage.classList.add("active");
        } else {
            slideImage.classList.remove("active");
        }
    });
}
window.addEventListener('scroll', debounce(checkSlide));