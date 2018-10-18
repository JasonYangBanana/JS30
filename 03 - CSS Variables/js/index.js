const inputs = document.querySelectorAll('.controls input');
function handlerUpdate() {
    const dataSizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + dataSizing);
}
inputs.forEach(value => value.addEventListener('change', handlerUpdate));
inputs.forEach(value => value.addEventListener('mousemove', handlerUpdate));