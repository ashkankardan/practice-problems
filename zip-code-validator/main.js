function zipCodeValidator(zipToValidate) {
  if (zipToValidate.length === 5) {
    for (var i = 0; i < zipToValidate.length; i++) {
      if (typeof parseInt(zipToValidate[i]) !== "number") {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(`zipCodeValidator("21594")`, zipCodeValidator("21594"));
console.log(`zipCodeValidator("3Eds32")`, zipCodeValidator("3Eds32"));
console.log(`zipCodeValidator("9123465")`, zipCodeValidator("9123465"));
