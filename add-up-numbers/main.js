// addUpNumbers
// input: one number
// output: sum of all numbers from 1 up to the input number

// input ex: 4
// output ex: 10

// create a variable holding the current total value
// create a loop starting with 1 and end with the input number
// evrytime add the current vallu of the loop to total value in variable
// return the total value

// function addUpNumbers(num) {
//   let sum = 0
//   for(let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }



const addUp = (num) => {
  let sum = 0;
  for(let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}


console.log(`addUp(4)`, addUp(4));
console.log(`addUp(13)`, addUp(13));
console.log(`addUp(600)`, addUp(600));
