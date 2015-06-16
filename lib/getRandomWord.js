/*
  input: Array of words
  output: Random word from the array of words
*/

module.exports = function(words) {
  var randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
};


