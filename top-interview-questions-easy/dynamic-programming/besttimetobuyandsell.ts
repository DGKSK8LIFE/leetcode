// Best Time to Buy And Sell Stock
function maxProfit(prices: number[]): number {
  let min: number = prices[0], max = 0;

  for (let i: number = 1; i < prices.length; i++) {
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }

    if (prices[i] < min) min = prices[i];
  }

  return max;
};