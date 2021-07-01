// UI Element Variables
const cssOutput = document.querySelector('.css-output');
const colorOne = document.querySelector('.color1');
const colorTwo = document.querySelector('.color2');
const body = document.querySelector('.gradient');
const random = document.querySelector('.random');

// Function to call when selecting colors from picker
const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;
	cssOutput.textContent = `background-image: ${body.style.background};`;
};

// Function to generate random colors and set background gradient to them
const setRandomColors = () => {
	const randomColorOne = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
	const randomColorTwo = `#${Math.floor(Math.random() * 16777216).toString(16)}`;

	colorOne.value = randomColorOne;
	colorTwo.value = randomColorTwo;

	setGradient();
};

// Event listeners
window.onload = setGradient;
colorOne.addEventListener('input', setGradient);
colorTwo.addEventListener('input', setGradient);
random.addEventListener('click', setRandomColors);
