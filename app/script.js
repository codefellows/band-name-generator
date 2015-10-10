$(function () {
  var $button = $('#name');
  var $adj = $('#adjective');
  var $noun = $('#noun');
  var $verb = $('#verb');
  var $submitAdj = $('#submitAdj');
  var $adjRes = $("#adjectiveRes");

  $button.click(function () {
    $.get('adjective', function (response) {
      $adj.text(response.word);
    });

    $.get('verb', function (response) {
      $verb.text(response.word);
    });

    $.get('noun', function (response) {
      $noun.text(response.word);
    });
  });

  $submitAdj.click(function(e) {
    e.preventDefault();

    var adjective = $("#adject").val();
    var adjPost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post("adjectives", adjPost, function(response) {
        var adjectiveRes = response.msg;
        $adjRes.text(adjectiveRes);
      });
    }

  });

});



