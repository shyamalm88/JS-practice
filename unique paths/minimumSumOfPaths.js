const paths = function (i, j, arr, dp) {
  if (i == 0 && j == 0) return arr[0][0];
  if (i < 0 || j < 0) return Number.MAX_VALUE;
  if (dp[i][j] != -1) return dp[i][j];
  let up = arr[i][j] + paths(i - 1, j, arr, dp);
  let left = arr[i][j] + paths(i, j - 1, arr, dp);
  return (dp[i][j] = Math.min(up, left));
};

const minimumSumOfPaths = function (m, n, matrix) {
  let dp = Array(m)
    .fill()
    .map(() => new Array(n).fill(-1));
  return paths(m - 1, n - 1, matrix, dp);
};

const matrix = [
  [1, 100, 10],
  [100, 4, 9],
  [5, 3, 2],
];
console.log(minimumSumOfPaths(3, 3, matrix));
