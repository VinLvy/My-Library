# My Library Project

This project is a simple book library web application where users can add, display, remove, and update the read status of books. It is designed with a user-friendly interface, utilizing a dialog form to input book information.

## Features
- Add new books with title, author, pages, and reading status.
- Display books in a table format.
- Remove books from the library.
- Toggle the reading status between **Read**, **Unread**, and **Reading**.

## Code Structure

The project uses JavaScript ES6 classes and DOM manipulation to manage books in a library array and display them dynamically on the page. Each book is an instance of the `Book` class, which simplifies the code by encapsulating book-related properties and methods.

## Refactoring Explanation

### Original Code

The original version used a plain constructor function to define the `Book` objects and separate functions to handle book operations (e.g., `toggleReadStatus`). However, using ES6 classes provides better structure, readability, and encapsulation.

### Refactored Code

The refactored version introduces an ES6 `Book` class with a `toggleStatus` method to change the read status of each book. This class-based approach improves the modularity of the code by combining properties and methods directly within the `Book` class. Here’s an overview of the main changes:

1. **Class Definition**: The `Book` class replaces the constructor function, defining `title`, `author`, `pages`, and `status` as properties in its constructor.
2. **Method Encapsulation**: The `toggleStatus` method is added to the `Book` class to manage the status change directly, reducing the need for a standalone `toggleReadStatus` function.
3. **Code Organization**: The `Book` class makes the code more organized, allowing each instance to handle its own data and behavior, which is particularly useful for handling dynamic content.

## Usage

To use this application:
1. Clone this repository.
2. Open `index.html` in a web browser.
3. Click "Add Book" to open the dialog, enter book information, and submit.
4. View, remove, or toggle the reading status of any book in the list.

## Example Code

```javascript
// Define a new Book class
class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  // Method to toggle reading status
  toggleStatus() {
    if (this.status === 'Read') {
      this.status = 'Unread';
    } else if (this.status === 'Unread') {
      this.status = 'Reading';
    } else {
      this.status = 'Read';
    }
  }
}

This `README.md` provides a project overview, feature list, code explanation, usage instructions, and an example code snippet.
