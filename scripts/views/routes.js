'use strict';

// books/:book_id


//books/new
let bookRoute = {};
$('#new-form').on('submit', bookRoute.submit);

//Allie code
page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initCreateFormPage(ctx));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));


page('/books/:book_id/update', (ctx, next) => app.Book.fetchOne(ctx, next), (ctx) => app.bookView.initUpdateFormPage(ctx));

page('/admin', app.adminView.initAdminPage);

page();