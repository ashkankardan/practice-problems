// volumeCalculator
// input: An array containing three sub arrays which represent box dimensions
// output: A numeric value which represents the total volume of the three boxes in the boxesArray parameter

// input ex: [[3, 3, 3], [4, 4, 4], [5, 5, 5]]
// output ex: 216

// create variable result
// loop over the boxesArray
// create a variable to store the current value of the multiplication of the indexes in a sub array
// loop over each sub array
// multiply each index of the current sub array to the current value of the currentVal variable
// after looping over each sub array, add the value of the currentVal to current value of the result
// return the value of the result variable


function volumeCalculator(boxesArray) {
  var result = 0;
  for (var i = 0; i < boxesArray.length; i++) {
    var currentVal = 1;
    for (var j = 0; j < boxesArray[i].length; j++) {
      currentVal *= boxesArray[i][j];
    }
    result += currentVal;
  }
  return result;
}


console.log(
  `volumeCalculator([[3, 3, 3], [4, 4, 4], [5, 5, 5]])`,
  volumeCalculator([
    [3, 3, 3],
    [4, 4, 4],
    [5, 5, 5],
  ])
);
console.log(
  `volumeCalculator([[5, 1, 4], [8, 5, 4], [3, 1, 7]])`,
  volumeCalculator([
    [5, 1, 4],
    [8, 5, 4],
    [3, 1, 7],
  ])
);
console.log(
  `volumeCalculator([[5, 4, 2], [12, 15, 21], [7, 7, 7]])`,
  volumeCalculator([
    [5, 4, 2],
    [12, 15, 21],
    [7, 7, 7],
  ])
);
