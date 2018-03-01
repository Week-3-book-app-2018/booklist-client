'use strict';

var app = app || {};


(function (module) {
  const bookView = {};

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };


  //at some point
  //Allie code
  // bookView.initIndexPage


  // bookView.initDetailPage = function(ctx) {
  //   resetView();
  //   $('.detail-view').show();
  //   $('.book-detail').empty();
  //   let template = Handlebars.compile($('#book-detail-template').text());
  //   $('.book-detail').append(template(ctxBook));
  // }

  //code review
  bookView.initFormView = function() {
    $('.container').hide();
    $('.formView').show();

  };




  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});