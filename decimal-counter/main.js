function decimalPlaceCounter(stringNumber) {
  var count = 0;
  for(var i = 0; i < stringNumber.length; i++) {
    if(stringNumber[i] === '.') {
      for(var j = i + 1; j < stringNumber.length; j++) {
        count++;
      }
    }
  }
  return count;
}

console.log("127.245:", decimalPlaceCounter("127.245"));
console.log("145:", decimalPlaceCounter("145"));
console.log("23.00:", decimalPlaceCounter("23.00"));
