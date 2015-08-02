'use strict';

$(function() {

  $('#name').click(function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);

    });
  });

  $('#name').click(function() {
    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);

    });
  });

  $('#name').click(function() {
    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);

    });
  });

  // make an event handler that, when a button is clicked
  // sends a POST request to our server
  $('#wordSubmit').on('submit', function(e) {
    e.preventDefault();

    // gt the text entered in the text box and save it to a variable
    var adjective = $('input[name=adjective]').val();
    var adjectivePost;

    var verb = $('input[name=verb]').val();
    var verbPost;

    var noun = $('input[name=noun]').val();
    var nounPost;

    if (verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function(response) {
        var serverResponse = response.message;
        $('#verbRes').text(serverResponse);

      });
    }

    if (adjective) {
      adjectivePost = {word: adjective};
      $.post('adjective', adjectivePost, function(response) {
        var serverResponse = response.message;
        $('#adjectiveRes').text(serverResponse);
      });
    }

    if (noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function(response) {
        var serverResponse = response.message;
        $('#nounRes').text(serverResponse);

      });
    }

  });

});
