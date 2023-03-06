// function shiftString(str) {
//   // Parse the number at the beginning of the string
//   const shift = parseInt(str);
//   if (isNaN(shift)) {
//     throw new Error("Invalid input");
//   }
  
//   let result = "";
//   for (let i = 1; i < str.length; i++) {
//     const charCode = str.charCodeAt(i);
//     if (charCode >= 97 && charCode <= 122) {
//       // Shift lowercase letters by the given amount
//       const shiftedCode = ((charCode - 97 + shift) % 26) + 97;
//       result += String.fromCharCode(shiftedCode);
//     } else {
//       throw new Error("Invalid input");
//     }
//   }
  
//   return result;
// }
let ltr = 'A'
console.log(((ltr.charCodeAt() - 65) % 26) + 65)
