'use strict'

module.exports = function(word, wordObject) {
	if (!wordObject.hasOwnProperty(word)) {
		wordObject[word] = true;
		
		return {message: 'Thanks! We added your fabulous word, ' 
		 + word + ' to our list.'};
	}

	return {message: 'We already have your word, '  + word + ' in our list.'};

};