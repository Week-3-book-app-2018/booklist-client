'use strict';

var app = {};

var __API_URL__ = 'https://localhost:3000';

// create a constructor function wrapped in IIFE
(function (module) {

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  Book.all = [];

  function Book (bookDataObj) {
    this.book_id = book_id,
    this.author = author,
    this.title = title, 
    this.isbn = isbn, 
    this.image_url = image_url,
    this.description = description
  }

  //book instance method
  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  //sorting rows by title, creating an array of book instances, assigning to Book.all array
  Book.loadAll = rows => {
    Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));
  };

  Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  };


  module.Book = Book;
})(app)

