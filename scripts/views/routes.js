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


//middleware
//page is an event listener, waiting for the href that we declare
//for client-side (front-end routing)