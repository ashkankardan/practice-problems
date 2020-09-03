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

console.log(decimalPlaceCounter("127.245"))
console.log(decimalPlaceCounter("145"));
console.log(decimalPlaceCounter("23.00"));
