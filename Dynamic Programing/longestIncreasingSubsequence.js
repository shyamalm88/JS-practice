const longestIncreasingSubsequence = function (arr) {
  let dp = Array.from({ length: arr.length }).map(() =>
    Array.from({ length: arr.length }).fill(-1)
  );
  return sequence(0, -1, arr, arr.length, dp);
};

const sequence = function (indx, prevIndx, arr, n, dp) {
  if (indx === n) return 0;
  if (dp[indx][prevIndx + 1] != -1) {
    return dp[indx][prevIndx + 1];
  }
  let length = 0 + sequence(indx + 1, prevIndx, arr, n, dp);
  if (prevIndx === -1 || arr[indx] > arr[prevIndx]) {
    length = 1 + sequence(indx + 1, indx, arr, n, dp);
  }
  return (dp[indx][prevIndx + 1] = length);
};

console.log(longestIncreasingSubsequence([5, 4, 11, 1, 16, 8]));
