function getWordCount(sentence) {
  return sentence.split(" ").length;
}

console.log("The word count in each sentence:");
console.log(
  "This is a sample sentence",
  getWordCount("This is a sample sentence")
);
console.log("Han shot first", getWordCount("Han shot first"));
console.log(
  "I will not fear, fear is the mind killer",
  getWordCount("I will not fear, fear is the mind killer")
);
