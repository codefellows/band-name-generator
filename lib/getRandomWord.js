'use strict';

module.exports =
function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() *
    (propArray.length - 0) + 0)];
  return {word: randomProp};
};
