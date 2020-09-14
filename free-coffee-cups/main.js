function freeCoffeeCups(coffeeCups) {
  var totalCups = Math.floor(coffeeCups / 6);

  return (totalCups += coffeeCups);
}

console.log("freeCoffeeCups(13)", freeCoffeeCups(13));
console.log("freeCoffeeCups(6)", freeCoffeeCups(6));
console.log("freeCoffeeCups(5)", freeCoffeeCups(5));
