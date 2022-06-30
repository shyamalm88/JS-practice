const func = function (index, targetWeight, arr, weights, dp) {
  if (index === 0) {
    if (weights[0] <= targetWeight) return arr[0];
    else return 0;
  }
  if (dp[index][targetWeight] != -1) return dp[index][targetWeight];
  let notTake = 0 + func(index - 1, targetWeight, arr, weights, dp);
  let take = Number.MIN_VALUE;
  if (weights[index] <= targetWeight) {
    take =
      arr[index] +
      func(index - 1, targetWeight - weights[index], arr, weights, dp);
  }
  return (dp[index][targetWeight] = Math.max(take, notTake));
};

const knapSack = function (arr, weights, targetWeight) {
  let dp = Array(arr.length + 1)
    .fill()
    .map(() => new Array(targetWeight + 1).fill(-1));
  return func(arr.length - 1, targetWeight, arr, weights, dp);
};

console.log(knapSack([11, 21, 41], [2, 4, 6], 8));
