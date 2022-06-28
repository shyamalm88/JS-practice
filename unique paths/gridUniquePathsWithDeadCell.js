const paths = function (i, j, arr, dp) {
  if (i >= 0 && j >= 0 && arr[i][j] == -1) return 0;
  if (i == 0 && j == 0) return 1;
  if (i < 0 || j < 0) return 0;
  if (dp[i][j] != -1) return dp[i][j];
  let up = paths(i - 1, j, arr, dp);
  let left = paths(i, j - 1, arr, dp);
  return (dp[i][j] = up + left);
};

const uniquePaths = function (m, n, matrix) {
  let dp = Array(m)
    .fill()
    .map(() => new Array(n).fill(-1));
  return paths(m - 1, n - 1, matrix, dp);
};

const matrix = [
  [0, 0, 0],
  [0, -1, 0],
  [0, 0, 0],
];
console.log(uniquePaths(3, 3, matrix));
// console.log(uniquePathsIterative(5, 5));
