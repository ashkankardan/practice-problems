// day-finder
// input: a string in date format (stringDate)
// return: a string the day of the week
//input ex: "05/22/1946"
//output ex: "Wednesday"

// create a storage with the name of weekdays starting with sunday
// check the number of the weekday specific for that date
// find the day name from the weekdays storage based on the day number and return the value

function dayFinder(stringDate) {
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return weekdays[new Date(stringDate).getDay()];
}

console.log(`dayFinder("05/22/1946")`, dayFinder("05/22/1946"));
console.log(`dayFinder("01/20/2001")`, dayFinder("01/20/2001"));
console.log(`dayFinder("03/15/1988")`, dayFinder("03/15/1988"));
