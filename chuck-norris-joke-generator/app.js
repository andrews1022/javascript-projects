const jokesList = document.getElementById('jokes');
const numberInput = document.getElementById('number');
const getJokesButton = document.getElementById('get-jokes');

const getJokes = async (e) => {
  try {
    e.preventDefault();

    const numberOfJokesToFetch = +numberInput.value;
    const response = await fetch(`http://api.icndb.com/jokes/random/${numberOfJokesToFetch}`);
    const jokes = await response.json();
    let htmlOutput = '';

    if (jokes) {
      jokes.value.forEach((joke) => {
        htmlOutput += `<li>${joke.joke}</li>`;
      });
    }

    jokesList.innerHTML = htmlOutput;
  } catch (error) {
    console.log(`Your error: ${error}`);
  }
};

getJokesButton.addEventListener('click', getJokes);
