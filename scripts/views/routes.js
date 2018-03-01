'use strict';

// books/:book_id


//books/new
let bookRoute = {};
$('#new-form').on('submit', bookRoute.submit);

//Allie code
page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initCreateFormPage(ctx));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
page();



//use page stuff instead ^
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