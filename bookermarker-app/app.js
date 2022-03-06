const form = document.querySelector('#myForm');

// Save bookmarks function
const saveBookmark = (e) => {
	// Prevent form from submitting
	e.preventDefault();

	// Get the values we type into the form
	const siteName = document.querySelector('#siteName').value;
	const siteUrl = document.querySelector('#siteUrl').value;

	// Validate entry
	if (!validateForm(siteName, siteUrl)) {
		return false;
	}

	// When we submit to local storage, save it as an array of objects
	// Create an object ready to submit to local storage
	const bookmark = { name: siteName, url: siteUrl };

	if (localStorage.getItem('bookmarks') === null) {
		// Initalize array
		const bookmarks = [];

		// Add to array
		bookmarks.push(bookmark);

		// Set to local storage and parse JSON into a string
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		// First, get booksmarks from local storage
		const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		// Add the bookmark we are submitting to that array
		bookmarks.push(bookmark); // bookmark object from above

		// Re-set back to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	// Clear form fields
	form.reset();

	// Re-call fetchBookmarks()
	fetchBookmarks();
};

// Delete Bookmark
const deleteBookmark = (url) => {
	// Get bookmarks from local storage
	const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// Loop through bookmarks
	for (let i = 0; i < bookmarks.length; i++) {
		if (bookmarks[i].url === url) {
			// Remove fromt the array
			bookmarks.splice(i, 1);
		}
	}

	// Reset the local storage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	// Re-call fetchBookmarks()
	fetchBookmarks();
};

// Fetch bookmarks
const fetchBookmarks = () => {
	// First, get booksmarks from local storage
	const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// Get output id
	const bookmarksResults = document.querySelector('#bookmarksResults');

	// Build the output
	bookmarksResults.innerHTML = '';

	// Loop through the bookmarks that are in local storage and output them one by one into the div
	for (let i = 0; i < bookmarks.length; i++) {
		const name = bookmarks[i].name;
		const url = bookmarks[i].url;

		// Append results to div
		bookmarksResults.innerHTML += `
      <div class="card mb-2 p-3">
        <h3>${name}</h3> 
        <a class="btn btn-success" href="${url}" target="_blank" rel="noopener noreferrer">Visit</a>
        <a onclick="deleteBookmark(${url})" class="btn btn-danger" href="#">Delete</a> 
      </div>
    `;
	}
};

// Validate the form entry
const validateForm = (siteName, siteUrl) => {
	// If either of these are not filled in:
	if (!siteName || !siteUrl) {
		alert('Please enter in all fields');
		return false;
	}

	// Validate URL entered is actually a URL:
	const expression =
		/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	const regex = new RegExp(expression);

	// Test if it doesn't match
	if (!siteUrl.match(regex)) {
		alert('Please use a valid URL');
		return false;
	}

	return true;
};

// Fetch bookmarks on page load
window.onload = fetchBookmarks;

// Listen for form submit
form.addEventListener('submit', saveBookmark);
