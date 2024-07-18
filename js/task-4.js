"use strict"; // "режим суворої сумісності"

// function getShippingCost(country) {
//   switch {

//   }
// return `Shipping to ${country} will cost ${price} credits`
// }

// function calculateTotal(number) {
//   let sumNumber = 0;
//   while (number > 0) {
//     sumNumber = sumNumber + number;
//     number -= 1;
//   }
//   return sumNumber;
// }
// console.log(calculateTotal(24));

// for (let i = 0; i <= 24; i += 1) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let sumNumber = 0;
//   for (let i = 0; i <= number; i += 1) {
//     console.log(i);
//     sumNumber = sumNumber + i;
//   }
//   return sumNumber;
// }
// console.log(calculateTotal(24));

// function calculateEvenTotal(number) {
//   let sumNumber = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//       sumNumber = sumNumber + i;
//     }
//   }
//   return sumNumber;
// }
// console.log(calculateEvenTotal(18));

const start = 6;
const end = 17;
let number;
for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number);
