

module.exports = function (word, wordObject) {
  // check if the word is on the object
  if (!wordObject.hasOwnProperty(word)) {
      // if it is not on the object add it and send a message that we added
      wordObject[word] = true;

      return { message: 'Thanks! We added your word, ' + word + ' to our our list!'}
  };

  // if it is send a polite message saying we have it
  return {message: 'We already have your word, ' + word + ' in our list'}
  // those messages will the the return value
}
