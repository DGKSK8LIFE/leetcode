// // Plus One
// function plusOne(digits: number[]): number[] {
//   if (digits == null || digits.length == 0)
//     return new Array<number>();

//   let carry: number = 1;
//   let i: number = digits.length;
//   for (i - 1; i >= 0; i--) {
//     if (digits[i] == 9) {
//       digits[i] = 0;
//     } else {
//       carry += digits[i];
//       digits[i] = carry;
//       break;
//     }
//   }

//   if (i < 0) {
//     const result: number[] = [digits.length + 1];
//     result[0] = 1;
//     return result;
//   } else {
//     return digits;
//   }
// };