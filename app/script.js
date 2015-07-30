'use strict';

$(function() {

	$("#name").click(function() {
		$.get("adjective", function(response){
			console.log(response);
 			var adjective = response.word;
 				$("#adjective").text(adjective);
		});

		$.get("#verb", function(response){
			console.log(response);
 			var verb = response.word;
 			$("#verb").text(verb);
		});

		$.get("#noun", function(response){
			console.log(response);
 			var noun = response.word;
 				$("#noun").text(noun);
		});
	});

	
	$('#submitWords').on('submit', function(e) {
		e.preventDefault();
		var adjective = $('input[name=adjective]').val();
		var adjectivePost;

		if (adjective) {
			adjectivePost = {word: adjective};
			$.post('adjective', adjectivePost, function(response) {
				console.log(response);
				var adjectiveRes = response.message;
				$('#adjectiveRes').text(adjectiveRes);
			});
		}
	});
});