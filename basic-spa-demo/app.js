// UI Element Variables
const contentDiv = document.getElementById('content');
const navLinks = Array.from(document.querySelectorAll('.link'));

// Handle initial page load
const loadContent = async () => {
  try {
    const response = await fetch('pages/index.html');
    const data = await response.text();
    contentDiv.innerHTML = data;
  } catch (error) {
    console.log(`Oops! This is your error: ${error}`);
  }
};

window.onload = loadContent();

// Loop through and add event listener to each nav link
navLinks.forEach((link) => {
  link.addEventListener('click', async (e) => {
    e.preventDefault();

    // Get href value
    const page = link.getAttribute('href');
    console.log(page);

    // Fetch data dynamically and insert content into div based on which link is clicked
    const response = await fetch(`pages/${page}.html`);
    const data = await response.text();
    contentDiv.innerHTML = data;
  });
});
