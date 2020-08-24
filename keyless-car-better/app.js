const checkDriverAge = () => {
  const age = prompt('What is your age?');

  if (+age < 18) {
    console.log('Sorry, you are too yound to drive this car. Powering off');
  } else if (+age > 18) {
    console.log('Powering On. Enjoy the ride!');
  } else if (+age === 18) {
    console.log('Congratulations on your first year of driving. Enjoy the ride!');
  }
};

document.addEventListener('DOMContentLoaded', checkDriverAge);
