function createRepeatingLetters(word, numOfRepeats) {
  var newArr = [];
  var newStr = "";
  for (var i = 0; i < word.length; i++) {
    for (var j = 1; j <= numOfRepeats; j++) {
      newArr.push(word[i]);
    }
  }
  for (var k = 0; k < newArr.length; k++) {
    newStr += newArr[k];
  }
  return newStr;
}

console.log(createRepeatingLetters("John", 3));
console.log(createRepeatingLetters("car", 4));
console.log(createRepeatingLetters("howdy", 1));
