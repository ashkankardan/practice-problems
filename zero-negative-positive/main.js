const both = (num1, num2) => (num1 === 0 && num2 === 0) ||
                             (num1 < 0 && num2 < 0) ||
                             (num1 > 0 && num2 > 0);


console.log(`both(6, 2)`, both(6, 2))
console.log(`both(0, 0)`, both(0, 0))
console.log(`both(-1, 2)`, both(-1, 2))
console.log(`both(0, 2)`, both(0, 2))
