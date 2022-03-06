// UI Element Variables
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');
const container = document.querySelector('.container');

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  // Add a book
  addBookToList(book) {
    // Create <tr> element
    const row = document.createElement('tr');

    // Insert table data
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td>
        <a href="#" class="delete">X</a>
      </td>
    `;

    // Append row to list
    bookList.appendChild(row);
  }

  // Show dynamic alert message
  showAlert(msg, className) {
    const div = document.createElement('div'); // Create the element
    div.className = `alert ${className}`; // Assign it a class name
    div.appendChild(document.createTextNode(msg)); // Add text
    container.insertBefore(div, bookForm); // Insert alert

    // Remove after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2000);
  }

  // Delete a book
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  // Clear input fields
  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Local Storage Class
class Store {
  static getBooks() {
    let books;

    // Check local storage
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    // Get books from local storage
    const books = Store.getBooks();

    // Loop through the books
    books.forEach((book) => {
      const ui = new UI(); // Put into the UI
      ui.addBookToList(book); // Add book to UI
    });
  }

  static addBook(book) {
    const books = Store.getBooks(); // Get books from local storage
    books.push(book); // Push on the book to the array
    localStorage.setItem('books', JSON.stringify(books)); // Set to local storage
  }

  static removeBook(isbn) {
    // Get books from local storage
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    // Set to local storage
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Add book event listener
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  const book = new Book(title, author, isbn); // Instantiate book object
  const ui = new UI(); // Instantiate UI object

  // Validate form entry
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error'); // Error alert
  } else {
    ui.addBookToList(book); // Add book to list
    Store.addBook(book); // Add to local storage
    ui.showAlert('Book Added!', 'success'); // Show success msg
    ui.clearFields(); // Clear fields
  }
});

// Remove book event listener
bookList.addEventListener('click', (e) => {
  e.preventDefault();

  const ui = new UI(); // Instantiate UI object
  ui.deleteBook(e.target); // Delete book

  // Remove from local storage
  // Remove by selecting tr element with ISBN#
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert('Book Removed!', 'success');
});
