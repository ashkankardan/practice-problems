function wordBuilder(wordToSpell) {
  var tempStr = "";
  var wordArr = [];
  for (var i = 0; i < wordToSpell.length; i++) {
    tempStr += wordToSpell[i]
    wordArr.push(tempStr)
  }
  return wordArr;
}

console.log(wordBuilder("JavaScript"));
console.log(wordBuilder("Moon"));
console.log(wordBuilder("Stars"));
