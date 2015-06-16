$(function() {
  $('#adjective').on('submit', function (event) {
    event.preventDefault();
    var userAdjective = $('#user-adjective').val();
    console.log("submitting adjective");
    $.post('/adjective', {word: userAdjective}, function(response) {
      var confirm = response.message + " We saved: <em>" + response.confirm + "</em";
      $('#adjective-res').html(confirm);

    })

  })

  $('#verb').on('submit', function (event) {
    event.preventDefault();
    var userVerb = $('#user-verb').val();
    console.log("submitting verb");
    $.post('/verb', {word: userVerb}, function(response) {
      var confirm = response.message + " We saved: <em>" + response.confirm + "</em";
      $('#verb-res').html(confirm);

    })

  })
  $('#noun').on('submit', function (event) {
    event.preventDefault();
    var userNoun = $('#user-noun').val();
    console.log("submitting");
    $.post('/noun', {word: userNoun}, function(response) {
      var confirm = response.message + " We saved: <em>" + response.confirm + "</em";
      $('#noun-res').html(confirm);

    })

  })



  $('button').on('click', function(){
    $.get("/adjective", function(response) {
    $('#adjective').html(response.word);
    });
  })
  $('button').on('click', function(){
    $.get("/noun", function(response) {
    $('#noun').html(response.word);
    });
  })
  $('button').on('click', function(){
    $.get("/verb", function(response) {
    $('#verb').html(response.word);
    });
  })
});


