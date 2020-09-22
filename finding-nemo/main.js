// findingNemo
// input: a JavaScript string which contains a series of words and includes the word Nemo
// output: A numeric value which represents the position of the word Nemo in the argument string

// input ex: "I am Nemo"
// output ex: 3

// create an empty storage to take each word from the string as an index
// walk over each index of the input string
// seperate indexes by " "
// once done with all indexes, check for the index that is equal as Nemo
// return the index of the "Nemo" + 1


function findingNemo(sentence) {
  return sentence.split(" ").indexOf("Nemo") + 1
}

console.log(`findingNemo("I am Nemo")`, findingNemo("I am Nemo"))
console.log(`findingNemo("Where is Nemo my son?")`, findingNemo("Where is Nemo my son?"))
console.log(`findingNemo("Nemo is my name")`, findingNemo("Nemo is my name"))
