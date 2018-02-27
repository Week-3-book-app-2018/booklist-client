'use strict';

var app = app || {};



(function (module) {
  const errorView = {};


  errorView.initErrorPage = function (err) {
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();
    let template = Handlebars.compile($('#error-template').text());
    $('#error-message').append(template(err));
  };


  //in the book.js
  // function errorCallback(errorView) {

  // }

  module.errorView = errorView;
})(app)

