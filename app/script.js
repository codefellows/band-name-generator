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
});
