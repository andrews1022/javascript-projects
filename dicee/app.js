// Grab elements
const leftDie = document.querySelector('.img1');
const rightDie = document.querySelector('.img2');
const outcomeHeading = document.getElementById('outcome');

// function to 'roll' dice
const dieRoll = () => {
  // Create 2 random numbers, each between 1-6
  const randonNumber1 = Math.floor(Math.random() * 6) + 1;
  const randonNumber2 = Math.floor(Math.random() * 6) + 1;

  leftDie.setAttribute('src', `img/dice${randonNumber1}.png`);
  rightDie.setAttribute('src', `img/dice${randonNumber2}.png`);

  if (randonNumber1 > randonNumber2) {
    outcomeHeading.textContent = 'Player One wins!';
  } else if (randonNumber2 > randonNumber1) {
    outcomeHeading.textContent = 'Player Two wins!';
  } else {
    outcomeHeading.textContent = `It's a draw! Try again!`;
  }
};

document.addEventListener('DOMContentLoaded', dieRoll);
