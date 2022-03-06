///////////////////////////////////////////////////////////////////////////
// SOLUTION #1
// Grab button element
const themeButton = document.getElementById('theme');

// Add event listener
themeButton.addEventListener('click', () => {
  // Grab all elements in the page
  const allElements = document.getElementsByTagName('*');

  // Loop through
  for (element of allElements) {
    element.classList.toggle('theme2');
  }
});

///////////////////////////////////////////////////////////////////////////
// SOLUTION #2
// Grab elements
const themeButton = document.getElementById('theme');

// Add event listener
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('theme2');
});

// BREAKDOWN:
// In the CSS file, everything is child of theme2
// So since the parent has to have theme2 in order for all of these elements to change, we just have to add theme2 the body tag.

///////////////////////////////////////////////////////////////////////////
// SOLUTION #3
const body = document.getElementsByTagName('body')[0];
const button = document.getElementById('theme');

button.addEventListener('click', () => {
  body.classList.toggle('theme2');
});
