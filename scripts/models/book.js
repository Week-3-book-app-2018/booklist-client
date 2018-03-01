'use strict';

var app = app || {};

const __API_URL__ = 'http://localhost:3000';

// create a constructor function wrapped in IIFE
(function (module) {

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book (bookDataObj) {

    //Allie's Way
    //Object is build in to js, gives an array of the keys. We then map over them to get an object literal
    Object.keys(bookDataObj).forEach(key => this[key] = bookDataObj[key]);
  }

  //book instance method
  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  //sorting rows by title, creating an array of book instances, assigning to Book.all array
  Book.all = [];
  Book.loadAll = rows => {
    console.log('is loadAll working');
    Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));

    //Allie code
    // Book.fetchAll = callback =>
    //   $.get(`${__API_URL__}/api/v1/books/:book_id`)
    //     .then(Book.loadAll)
    //     .then(callback)
    //     .catch(errorCallback);

    // //creating new property called 'book' and assigning a value of the 1st book
    // Book.fetchOne = (ctx, callback) =>
    //   $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
    //     .then(results => ctx.book = results[0])
    //     .then(callback)
    //     .catch(errorCallback);

    // Book.create = book =>
    //   $.post(`${__API_URL__}/api/v1/books/`, book)
    //     .then(() => page(`/`))
    //     .catch(errorCallback);

    // module.Book = Book;
  };

  //fetch all books
  Book.fetchAll = callback => {
    console.log('is fetchAll working');
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  };

  //fetch one book
  Book.fetchOne = callback => {
    $.get(`${__API_URL__}/api/v1/books/:book_id`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  };

  module.Book = Book;
})(app)

