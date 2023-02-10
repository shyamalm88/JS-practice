const prices = [7, 1, 5, 3, 6, 4];

// think smallest is the first element, loop over array to find the smallest
// from prices subtract smallest and check which is max;

const maxProfit = function (arr) {
  let smallest = arr[0];
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    smallest = Math.min(smallest, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - smallest);
  }
  return maxProfit;
};

console.log(maxProfit(prices));
