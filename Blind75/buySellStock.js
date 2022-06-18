const prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
  let maxProfit = 0;
  let smallest = prices[0];

  for (let i = 0; i < prices.length; i++) {
    smallest = Math.min(smallest, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - smallest);
  }
  return maxProfit;
};

console.log(maxProfit(prices));
