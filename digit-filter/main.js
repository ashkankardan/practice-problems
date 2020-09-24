// digitFilter
// input: an array of numeric values, a number value
// output: An array which contains the numeric values from the numbersArray array which have a length that matches the value in the numberFilter argument
// input ex: ([23, 312, 24, 243, 43], 3)
// output ex: [312, 243]

// create a result storage and assign it an empty array for start
// walk over each index inside the number array
// check the length for each index
// if the length of the index is equal to the numberFilter add the index to the result array
// once done return result

function digitFilter(numbersArray, numberFilter) {
  var result = [];
  for(var i = 0; i < numbersArray.length; i++) {

    if (numbersArray[i].toString().length == numberFilter) {
      result.push(numbersArray[i]);
    }
  }
  return result;
}


console.log(
  `digitFilter([23, 312, 24, 243, 43], 3)`,
  digitFilter([23, 312, 24, 243, 43], 3)
);
console.log(
  `digitFilter([23, 315, 231, 54, 72], 2)`,
  digitFilter([23, 315, 231, 54, 72], 2)
);
console.log(
  `digitFilter([1, 4323, 23, 4565, 3, 4], 1)`,
  digitFilter([1, 4323, 23, 4565, 3, 4], 1)
);
