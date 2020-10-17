// // Best Time to Buy and Sell Stock II

// // Brute Force
// function maxProfitBruteForce(prices: number[]): number {
//   let maxprofit: number = 0;
//   for (let i: number = 0; i < prices.length - 1; i++) {
//     for (let j: number = i + 1; j < prices.length; j++) {
//       const profit: number = prices[j] - prices[i];
//       if (profit > maxprofit)
//         maxprofit = profit;
//     }
//   }
//   return maxprofit;
// }


// // One Pass
// function maxProfit(prices: number[]): number {
//   let minprice: number = 0;
//   let maxprofit: number = 0;
//   for (let i: number = 0; i < prices.length; i++) {
//     if (prices[i] < minprice)
//       minprice = prices[i];
//     else if (prices[i] - minprice > maxprofit)
//       maxprofit = prices[i] - minprice;
//   }
//   return maxprofit;
// };