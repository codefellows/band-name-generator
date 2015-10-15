'use strict';

$(function() {

  $('button').click(function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);
    });

    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });

    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });

  });

  $('#submitWords').on('submit', function(e) {
    e.preventDefault();

    var adjective = $('input[name=adjective]').val();
    var noun = $('input[name=noun]').val();
    var verb = $('input[name=verb]').val();
    var adjPost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post('adjective', adjPost, function(response) {
        var adjectiveRes = response.msg;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }

    if (noun) {
      adjPost = {word: noun};
      $.post('noun', adjPost, function(response) {
        var nounRes = response.msg;
        $('#nounRes').text(nounRes);
      });
    }

    if (verb) {
      adjPost = {word: verb};
      $.post('verb', adjPost, function(response) {
        var verbRes = response.msg;
        $('#verbRes').text(verbRes);
      });
    }

  });

});
