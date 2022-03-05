const sliderRed = document.getElementById('red');
const sliderGreen = document.getElementById('green');
const sliderBlue = document.getElementById('blue');
const box = document.getElementById('box');

const setColor = () => {
    const color = `rgb(${sliderRed.value},${sliderGreen.value},${sliderBlue.value})`;

    box.style.background = color;
    box.textContent = color;
};

sliderRed.addEventListener('input', setColor);
sliderGreen.addEventListener('input', setColor);
sliderBlue.addEventListener('input', setColor);

setColor();
