"use strict"; // "режим суворої сумісності"

function getShippingCost(country) {
  let price;
  switch (country) {
    case "China":
      price = 100;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Chile":
      price = 250;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Australia":
      price = 170;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Jamaica":
      price = 120;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    // ...
    default:
      return "Sorry, there is no delivery to your country";
  }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

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

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
console.log(number);

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(16, 35, 7));
