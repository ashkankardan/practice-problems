// accountNumberProtector
// input: a string which contains a sixteen digit credit card number
// output: The last four numbers of the credit card number with "**" as a prefix
// input ex: "5543223485638832"
// output ex: "**8832"

// create a storage for result and start it with **
// git the last 4 digit
// add it to the storage
//show the value of the result storage


function accountNumberProtector(cardNumberString) {
  var result = "**";
  return result += (cardNumberString.slice(-4));
}


console.log(
  `accountNumberProtector("5543223485638832")`,
  accountNumberProtector("5543223485638832")
);
console.log(
  `accountNumberProtector("8934235477210943")`,
  accountNumberProtector("8934235477210943")
);
console.log(
  `accountNumberProtector("7513635499320192")`,
  accountNumberProtector("7513635499320192")
);
