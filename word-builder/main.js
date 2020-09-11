var wordArr = [];
var tempStr = "";

function wordBuilder(wordToSpell) {
  for (var i = 0; (i = wordToSpell.length); i++) {
    tempStr+= tempStr[i]
    wordArr.push(tempStr);
  }
  return wordArr;
}

console.log(wordBuilder("JavaScript"));
console.log(wordBuilder("Moon"));
console.log(wordBuilder("Stars"));
