"use strict"; // "режим суворої сумісності"

// function getShippingCost(country) {
//   switch {

//   }
// }

function calculateTotal(number) {
  let sumNumber = 0;
  while (number > 0) {
    sumNumber = sumNumber + number;
    number -= 1;
  }
  return sumNumber;
}

console.log(calculateTotal(24));

// function calculateTotal(number) {
//   for (let i = 0; number >= 0; i = i + number) {
//     number += 1;
//   }
// }
// console.log(calculateTotal(24));
