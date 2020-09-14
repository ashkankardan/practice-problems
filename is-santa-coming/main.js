function isSantaComing(dateObject) {
  var day = dateObject;
  return day.getDate() === 24 && day.getMonth() === 11;
}

console.log("(2001, 11, 24)", isSantaComing(new Date(2001, 11, 24)));
console.log("(2018, 7, 4)", isSantaComing(new Date(2018, 7, 4)));
console.log(
  "(1995, 11, 23, 23, 59, 59)",
  isSantaComing(new Date(1995, 11, 23, 23, 59, 59))
);
