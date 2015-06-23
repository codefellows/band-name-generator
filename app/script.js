$(function () {

  $('#funButton').on('click',
  function () {

    $.get('https://arcane-waters-5216.herokuapp.com/adjective', function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);
      });

    $.get('https://arcane-waters-5216.herokuapp.com/verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
      });

    $.get('https://arcane-waters-5216.herokuapp.com/noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);

    });
  });

  $('#save').on('click',
  function () {
    var bandname = $("#bandname").text(); //grabs bandname text
    $.post("bandname", bandname, function(response) {
      bandname.fadeOut('slow/400/fast', function() {
      }).text('Saved');
    });
  });

  $('#submitWords').on('submit', function(e) {
    e.preventDefault();

    var adjective = $("input[name=adjective]").val();
    var verb = $("input[name=verb]").val();
    var noun = $("input[name=noun]").val();

    var adjPost;
    var verbPost;
    var nounPost;

    if(adjective) {
      adjPost = {word: adjective};
      $.post("adjective", adjPost, function(response) {
        var adjectiveRes = response.msg;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }

    if(verb) {
      verbPost = {word: verb};
      $.post("verb", verbPost, function(response) {
        var verbRes = response.msg;
        $('#verbRes').text(verbRes);
      });
    }

    if(noun) {
      nounPost = {word: noun};
      $.post("noun", nounPost, function(response) {
        var nounRes = response.msg;
        $('#nounRes').text(nounRes);
      });
    }
  });

});
