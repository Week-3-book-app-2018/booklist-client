'use strict';

var app = app || {};


(function (module) {
  $('.icon-menu').on('click', function(event) {
    $('.nav-menu').slideToggle(350);
  })
  
  function resetView() {
    $('.container').hide();
    $('.nav-menu').slideUp(350);
  }
  
  const bookView = {};

  bookView.initIndexPage = function(ctx) {
    resetView();
    $('.book-view').show();
    $('#book-list').empty();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.initDetailPage = function(ctxBook) {
    resetView();
    $('.detail-view').show();
    $('.book-detail').empty();
    let template = Handlebars.compile($('#book-detail-template').text());
    $('.book-detail').append(template(ctxBook));
  };

  bookView.initCreateFormPage = function() {
    resetView();
    $('.create-view').show();
    $('#create-view').on('submit', function(event) {
      event.preventDefault();

      let book = {
        author: event.target.author.value,
        title: event.target.title.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value,
      };

    module.Book.create(book);

  //code review
  // bookView.initFormView = function() {
  //   $('.container').hide();
  //   $('.formView').show();

  // };




  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});