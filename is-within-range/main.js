function isWithinRange(number, rangeObject) {
  var trueOrFalse = false;
  for (var i = rangeObject.min; i <= rangeObject.max; i++) {
    if(number === i) {
      trueOrFalse = true;
    }
  }
  return trueOrFalse;
}


console.log(5, "is within the range:", isWithinRange(5, { min: 1, max: 9 }));
console.log(
  12,
  "is within the range:",
  isWithinRange(12, { min: 15, max: 29 })
);
console.log(
  9,
  "is within the range:",
  isWithinRange(9, { min: 0, max: 9 })
);
