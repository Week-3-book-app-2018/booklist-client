'use strict';

// books/:book_id


//books/new
let bookRoute = {};
$('#new-form').on('submit', bookRoute.submit);

bookRoute.submit = event => {
  event.preventDefault();
  let bookEntry = new Book({
    author: $('#book-author').val(),
    title: $('#book-title').val(),
    isbn: $('#book-isbn').val(),
    image_url: $('#book-image_url').val(),
    description: $('#book-description').val(),
  });

  bookEntry.insertRecord();

  window.location = '../';
};