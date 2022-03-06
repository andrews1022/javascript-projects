const input = document.querySelector('#lbsInput');

const convertUnits = () => {
	const grams = document.querySelector('#gramsOutput');
	const kilo = document.querySelector('#kgOutput');
	const ounce = document.querySelector('#ozOutput');
	const output = document.querySelector('#output');

	// Set visibility of the card/output container back to visible
	output.classList.add('visible');

	// Convert units
	grams.innerHTML = +(input.value * 453.592).toFixed(2);
	kilo.innerHTML = +(input.value / 2.205).toFixed(2);
	ounce.innerHTML = +(input.value * 16).toFixed(2);
};

// Listen for event type input
input.addEventListener('input', convertUnits);
