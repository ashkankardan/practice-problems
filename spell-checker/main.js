// spellChecker
// input: 2 arrays as argument [user typed string words] [correctly spelled string words]
// output: 2 arrays [spelled correct] [spelled incorrect]
// input ex: spellChecker(["boy", "duct", "ice cream", "sendwich"], ["boy", "duck", "ice cream", "sandwich"])
// output ex: { correct: ["boy", "ice cream"], incorrect: ["duct", "sendwich"]}

// create the main storage to hold both correct and incorrect sets of values together
// create two storage, one to keep words with correct spelling and second with incorrect spelling
// check the value in each space of the first given value against the same spot on the second given value
// every time both values match add them to the first storage
// every time the values mismatch add th incorrect value to the second storage
// once checked all values, combine both storages in one place and show the result

function spellChecker(userWords, correctWords) {
  var result = {
    correctSpell: [],
    incorrectSpell: [],
  };
  for (var i = 0; i < userWords.length; i++) {
    if (userWords[i] === correctWords[i]) {
      result.correctSpell.push(userWords[i]);
    } else {
      result.incorrectSpell.push(userWords[i]);
    }
  }
  return result;
}

console.log(
  spellChecker(
    ["boy", "duct", "ice cream", "sendwich"],
    ["boy", "duck", "ice cream", "sandwich"]
  )
);
console.log(spellChecker(["jam", "breat", "sound"], ["jam", "bread", "sound"]));
console.log(spellChecker(["java", "CDS", "HTMO"], ["java", "CSS", "HTML"]));
