const canCapture = arr => {
  if(arr[0][0] === arr[1][0]) {
    return true
  } else if(arr[0][1] === arr[1][1]) {
    return true
  } else {
    return false;
  }
}


console.log(`canCapture(["A8", "E8"])`, canCapture(["A8", "E8"]));
console.log(`canCapture(["A1", "B2"])`, canCapture(["A1", "B2"]));
console.log(`canCapture(["H4", "H3"])`, canCapture(["H4", "H3"]));
console.log(`canCapture(["F5", "C8"])`, canCapture(["F5", "C8"]));
