// convertMinutesToSeconds
// input: a string which represents a time in minutes and seconds
// output: a number which represents the converted time in seconds
// input ex: "15:34"
// output ex: 934

// take the first 2 index of string
// times 60 to get the value in seconds
// take the last 2 index of the string
// add it to the value of the 2nd step
// return the result


function convertMinutesToSeconds(timeToConvert) {
  return (timeToConvert.slice(0,2) * 60 + timeToConvert.slice(-2)*1)
}


console.log(
  `convertMinutesToSeconds("15:34")`,
  convertMinutesToSeconds("15:34")
);
console.log(
  `convertMinutesToSeconds("02:45")`,
  convertMinutesToSeconds("02:45")
);
console.log(
  `convertMinutesToSeconds("08:21")`,
  convertMinutesToSeconds("08:21")
);
