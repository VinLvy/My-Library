const myLibrary = [];
const dialog = document.querySelector('dialog');
const openDialogButton = document.querySelector('.open-dialog');
const closeDialogButton = document.querySelector('.close-dialog');
const booksTableBody = document.querySelector('.books-table tbody');

// Book constructor
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Function to add a book to the library
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks(); // Update the display after adding a new book
}

// Function to display books
function displayBooks() {
  booksTableBody.innerHTML = ''; // Clear previous content

  myLibrary.forEach((book, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.status}</td>
      <td>
        <button onclick="removeBook(${index})">Remove</button>
        <button onclick="toggleReadStatus(${index})">Toggle Status</button>
      </td>
    `;

    booksTableBody.appendChild(row);
  });
}

// Function to remove a book from the library
function removeBook(index) {
  myLibrary.splice(index, 1); // Remove book from array
  displayBooks(); // Update the display
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
  const book = myLibrary[index];
  if (book.status === 'Read') {
    book.status = 'Unread';
  } else if (book.status === 'Unread') {
    book.status = 'Reading';
  } else {
    book.status = 'Read';
  }
  displayBooks(); // Update the display
}

// Function to handle the form submission
function addBook(event) {
  event.preventDefault(); // Prevent form from submitting to the server

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.querySelector('input[name="status"]:checked').value;

  const newBook = new Book(title, author, pages, status);
  addBookToLibrary(newBook);

  dialog.close(); // Close the dialog after adding the book
}

// Event listeners for opening and closing the dialog
openDialogButton.addEventListener('click', () => {
  dialog.showModal(); // Open dialog
});

closeDialogButton.addEventListener('click', () => {
  dialog.close(); // Close dialog
});
