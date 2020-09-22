// fogClearer
// input: a JavaScript string
// output: A string with the letters "f", "o", and "g" removed from the original string argument if those letters exist
// The string "It's a clear day!" if there are no instances of "f", "o", and "g" in the original string argument

// input ex: fogClearer("fffdarkooooooggggggg")
//output ex: "dark"

// a function name fogClearer with a string as argument
// a storage to take the indexes of the input string without any f/o/g
// walk over the input string
// for each index if it's not equal as f or o or g add it to current value of the storage
// once done, check if the storage value is not same as input string return the storage value
// if it's same, return "It's a clear day!"

function fogClearer(stringToClear) {
  var result = "";
  for (var i = 0; i < stringToClear.length; i++) {
    if (
      stringToClear[i] !== "f" &&
      stringToClear[i] !== "o" &&
      stringToClear[i] !== "g"
    ) {
      result += stringToClear[i];
    }
  }
  if (result === stringToClear) {
    return "It's a clear day!";
  } else {
    return result;
  }
}

console.log(
  `fogClearer("fffdarkooooooggggggg")`,
  fogClearer("fffdarkooooooggggggg")
);

console.log(`fogClearer("I like nice trees")`, fogClearer("I like nice trees"));

console.log(
  `fogClearer("foogooooffffhuhooofff")`,
  fogClearer("foogooooffffhuhooofff")
);
