// payscale-analyzer
// input : one parameter > array of numeric values
//  output : return the difference between the lowest and highest number
// input ex: [28, 34, 21, 39]
// output ex: 18

// create a variable to get assign with highest value and assign 0 to it to start with
// create a variable to get assign with lowest value and assign 0 to it to start with
// check the length of array
// check the value of every index of the array against the current value in highest and lowest variable
// assign the value of the current index to either of the highest and/or lowest variable accordingly based on the result of expression
// once checked all the indexes of the array and found the highest and lowest value, subtract the value of the highest variable from the value of the lowest variable and and return value



function payscaleAnalyzer(payList) {
  var highest = payList[0];
  var lowest = payList[0];

  for(var i = 0; i < payList.length; i++) {
    if(payList[i] > highest) {
      highest = payList[i]
    }
    else if(payList[i] < lowest){
      lowest = payList[i]
    }
  }

  return highest - lowest;
}

console.log("payscaleAnalyzer([28, 34, 21, 39])", payscaleAnalyzer([28, 34, 21, 39]))
console.log("payscaleAnalyzer([18, 22, 19, 26])", payscaleAnalyzer([18, 22, 19, 26]));
console.log(
  "payscaleAnalyzer([41.50, 27.25, 32.50, 29.60])",
  payscaleAnalyzer([41.5, 27.25, 32.5, 29.6])
);
