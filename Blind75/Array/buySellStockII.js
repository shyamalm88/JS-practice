// in for loop check initialize the value from index 1
// check if the current value greater than the previous value
// update profit
const buySellStockII = function (arr) {
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      profit += arr[i] - arr[i - 1];
    }
  }
  return profit;
};

console.log(buySellStockII([5, 2, 6, 1, 4, 7, 3, 6]));
