function oddUpEvenDown(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i] - 1);
    } else if (array[i] % 2 !== 0) {
      result.push(array[i] + 1);
    }
  }
  return result;
}

console.log("oddUpEvenDown([1, 2, 3, 4, 5])", oddUpEvenDown([1, 2, 3, 4, 5]));
console.log(
  "oddUpEvenDown([23, 15, 18, 14, 32])",
  oddUpEvenDown([23, 15, 18, 14, 32])
);
console.log(
  "oddUpEvenDown([72, 212, 77, 124, 53])",
  oddUpEvenDown([72, 212, 77, 124, 53])
);
