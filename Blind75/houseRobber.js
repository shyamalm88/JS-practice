const houseRob = function (arr) {
  let memo = Array(arr.length + 1).fill(-1);
  return rob(arr, arr.length - 1, memo);
};

const rob = function (arr, i, memo) {
  if (i < 0) {
    return 0;
  }
  if (memo[i] >= 0) {
    return memo[i];
  }
  let result = Math.max(rob(arr, i - 2, memo) + arr[i], rob(arr, i - 1, memo));
  memo[i] = result;
  return memo[i];
};
