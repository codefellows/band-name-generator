'use strict';

module.exports = function postRandomWord (word, object) {
  //check if the word exists
  if (object.hasOwnProperty(word)) {
      //if the word does exist, then send a ncie message back
    return {msg: 'Thanks for trying! We already have that word.'}
  } else {
      //if the word doesn't exist, add it as a property to that object
    object[word] = true;
      //  and send a message back thanking htem for their word
    return {msg: 'Thanks for submitting your awesome word, ' + word + '!'}
  }
};
