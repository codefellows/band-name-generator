'use strict';

$(function () {

	$('#input-adjective').on('submit', function (event) {
		console.log(event);
			event.preventDefault();
			if ($('#user-adjective').val() != '') {
				var userAdjective = $('#user-adjective').val();
				$.post('/adjective', {word: userAdjective}, function (response) {
					var confirm = response.message + " <em>" + response.confirm + "</em>";
					$('#word-add-response').html(confirm);
				});
			$('#user-adjective').val('');
		}
	});

	$('#input-verb').on('submit', function (event) {
		console.log(event);
		event.preventDefault();
		if ($('#user-verb').val() != '') {
			var userVerb = $('#user-verb').val();
			$.post('/verb', {word: userVerb}, function (response) {
				var confirm = response.message + " <em>" + response.confirm + "</em>";
				$('#word-add-response').html(confirm);
			});
			$('#user-verb').val('');
		}
	});

	$('#input-noun').on('submit', function (event) {
		console.log(event);
		event.preventDefault();
		var userNoun = $('#user-noun').val();
		if ($('#user-noun').val() != '') {
			$.post('/noun', {word: userNoun}, function (response) {
				var confirm = response.message + " <em>" + response.confirm + "</em>";
				$('#word-add-response').html(confirm);
			});
			$('#user-noun').val('');
		}
	});

	var generatedBandName = ['', '', ''];
	$('#get-name').click(function() {

		$.get('/adjective', function (response) {
			generatedBandName[0] = response.word;
			if (generatedBandName[1] && generatedBandName[2]) {
				$('#band-name').html(generatedBandName[0] + ' ' + generatedBandName[1] + ' ' + generatedBandName[2]);
			}
		});

		$.get('/verb', function (response) {
			generatedBandName[1] = response.word;
			if (generatedBandName[0] && generatedBandName[2]) {
				$('#band-name').html(generatedBandName[0] + ' ' + generatedBandName[1] + ' ' + generatedBandName[2]);
			}
		});

		$.get('/noun', function (response) {
			generatedBandName[2] = response.word;
			if (generatedBandName[0] && generatedBandName[1]) {
				$('#band-name').html(generatedBandName[0] + ' ' + generatedBandName[1] + ' ' + generatedBandName[2]);
			}
		});
	});
})