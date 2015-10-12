$(function() {
  $("#name").click(function() {
    $.get("http://localhost:3000/adjective", function(response) {
      $("#adjective").text(response.word);
    });
  });

  $("#name").click(function() {
    $.get("http://localhost:3000/noun", function(response) {
      $("#noun").text(response.word);
    });
  });

  $("#name").click(function() {
    $.get("http://localhost:3000/verb", function(response) {
      $("#verb").text(response.word);
    });
  });

  $("#submitWords").on("submit", function(e) {
    e.preventDefault();

    var adjective = $("input[name=adjective]").val();
    var noun = $("input[name=noun]").val();
    var verb = $("input[name=verb]").val();
    var adjPost;
    var nounPost;
    var verbPost;

    if (verb) {
      verbPost = {word: verb};
      $.post("verb", verbPost, function(response) {
        var verbRes = response.msg;
        $("#verbRes").text(verbRes);
      });
    }
    if (adjective) {
      adjPost = {word: adjective};
      $.post("adjective", adjPost, function(response) {
        var adjectiveRes = response.msg;
        $("#adjectiveRes").text(adjectiveRes);
      });
    }
    if (noun) {
      nounPost = {word: noun};
      $.post("noun", nounPost, function(response) {
        var nounRes = response.msg;
        $("#nounRes").text(nounRes);
      });
    }
  });
});
