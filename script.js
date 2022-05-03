const button = document.querySelector('#btn');
const text = document.getElementById('text');
const square = document.querySelector('#square');
const circleButton = document.querySelector('#e_btn');
const circle = document.querySelector('#circle');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');


const changeColor = function () {
    square.style.backgroundColor = text.value;
};

const logger = function (event) {
    rangeSpan.textContent = event.target.value+'%';
    circle.style.width = parseInt(rangeSpan.textContent)+'%';
    circle.style.height = parseInt(rangeSpan.textContent)+'%';
};

rangeSpan.innerHTML = '<span id="range-span">50%</span>';
circle.style.width = parseInt(rangeSpan.textContent)+'%';
circle.style.height = parseInt(rangeSpan.textContent)+'%';

button.addEventListener('click', changeColor);
circleButton.style.display = 'none';

range.addEventListener('input', logger);

