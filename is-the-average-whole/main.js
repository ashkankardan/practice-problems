function isTheAverageWhole(numbersArray) {
  var sum = 0;
  var average = 0;
  var trueOrFalse = true;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  average = (sum / numbersArray.length).toString();

  for (var j = 0; j < average.length; j++) {
    if (average[j] == ".") {
      trueOrFalse = false;
    }
  }
  return trueOrFalse;
}

console.log(isTheAverageWhole([1, 3, 4, 4]));
console.log(isTheAverageWhole([3, 4]));
console.log(isTheAverageWhole([5, 5, 5]));
