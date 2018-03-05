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
    Object.keys(bookDataObj).forEach(key => this[key] = bookDataObj[key]);
  }

  //book instance method
  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  //sorting rows by title, creating an array of book instances, assigning to Book.all array
  Book.all = [];
  Book.loadAll = rows =>
    Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));

  //fetch all books
  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  //fetch one book
  Book.fetchOne = (ctx, callback) => {
    console.log('ctx params'+ ctx.params.book_id);
    $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
      .then(results => ctx.book = results[0])
      .then(callback)
      .catch(errorCallback);
  };

  Book.create = book => {
    console.log('created book');
    $.post(`${__API_URL__}/api/v1/books/`, book)
      .then(() => page(`/`))
      .catch(errorCallback);
  };

  Book.update = (ctx, book) =>
    $.ajax({
      url: `${__API_URL__}/api/v1/books`,
      method: 'PUT',
      data: {
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        image_url: book.image_url,
        description: book.description,
        book_id: book.book_id
      }
    })
      .then(() => page('/'))
      .catch(errorCallback);


  Book.destroy = function(id) {
    $.ajax({
      url:`${__API_URL__}/api/v1/books/${id}`,
      method:'DELETE'
    })
      .then(() => page('/'))
      .catch(errorCallback);
  };


  module.Book = Book;
})(app);