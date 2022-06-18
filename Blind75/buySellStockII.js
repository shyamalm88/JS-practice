const buySellStockII = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

console.log(buySellStockII([5, 2, 6, 1, 4, 7, 3, 6]));
