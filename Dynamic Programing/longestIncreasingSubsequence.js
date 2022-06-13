const longestIncreasingSubsequence = function (arr) {
  let dp = Array.from({ length: arr.length }).map(() =>
    Array.from({ length: arr.length }).fill(-1)
  );
  return sequence(0, -1, arr, arr.length, dp);
};

const sequence = function (index, prevIndex, arr, n, dp) {
  if (index === n) return 0;
  if (dp[index][prevIndex + 1] != -1) {
    return dp[index][prevIndex + 1];
  }
  let length = 0 + sequence(index + 1, prevIndex, arr, n, dp);
  if (prevIndex == -1 || arr[index] > arr[prevIndex]) {
    length = 1 + sequence(index + 1, index, arr, n, dp);
  }
  return (dp[index][prevIndex + 1] = length);
};

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
