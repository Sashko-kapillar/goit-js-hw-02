'use strict';

// function getElementWidth(content, padding, border) {
//   if (typeof content === "string") {
//     content = Number.parseFloat(content)
//   }
  
//   if (typeof padding === "string") {
//     padding = Number.parseFloat(padding)
//   }
  
//   if (typeof border === "string") {
//     border = Number.parseFloat(border)
//   }
//   const b = content + padding*2 + border*2;
//   return (b);
// }

// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px")); 
// console.log(getElementWidth("200px", "0px", "0px")); 

function checkForSpam(message) {
  const lowercaseInput = message.toLowerCase();
  const hasSpam = lowercaseInput.includes("spam");
  const hasSale = lowercaseInput.includes("sale");
    if (hasSpam || hasSale) {
    return 'true'
  } 
  else {
    return 'false'
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true