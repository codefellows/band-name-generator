'use strict';

$(function() {

	$("#name").click(function() {
		$.get("adjective", function(response){
			console.log(response);
 			var adjective = response.word;
 				$("#adjective").text(adjective);
		});

		$.get("verb", function(response){
			console.log(response);
 			var verb = response.word;
 			$("#verb").text(verb);
		});

		$.get("noun", function(response){
			console.log(response);
 			var noun = response.word;
 				$("#noun").text(noun);
		});
	});

	
	$('#submitWords').on('submit', function(e) {
		e.preventDefault();
		var adjective = $('input[name=adjective]').val();
		var adjectivePost;
		var verb = $('input[name=verb]').val();
		var verbPost;
		var noun = $('input[name=noun]').val();
		var nounPost;

		if (adjective) {
			adjectivePost = {word: adjective};
			$.post('adjective', adjectivePost, function(response) {
				console.log(response);
				var adjectiveRes = response.message;
				$('#adjectiveRes').text(adjectiveRes);
			});
		}

		if (verb) {
			verbPost = {word: verb};
			$.post('verb', verbPost, function(response) {
				console.log(response);
				var verbRes = response.message;
				$('#verbRes').text(verbRes);
			});
		}

		if (noun) {
			nounPost = {word: noun};
			$.post('noun', nounPost, function(response) {
				console.log(response);
				var nounRes = response.message;
				$('#nounRes').text(nounRes);
			});
		}
	});
});