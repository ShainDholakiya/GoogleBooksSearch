import axios from "axios";

const API_Key = "AIzaSyCIb34O2N-1vt49FsukEIi6i3GZcD2WNpI";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(book) {
    // console.log(book);
    return axios.post("/api/books", book);
  },
  searchBooks: function(keywords) {
    return axios.get(
      encodeURI(
        `https://www.googleapis.com/books/v1/volumes?q=${keywords}&key=${API_Key}`
      )
    );
  }
};
