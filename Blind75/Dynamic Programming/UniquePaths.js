/**
 * Description
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

 

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
 */

const uniquePaths = (m, n) => {
  const memo = {};
  const aux = (rowIndex, columnIndex) => {
    if (
      memo[rowIndex] !== undefined &&
      memo[rowIndex][columnIndex] !== undefined
    ) {
      return memo[rowIndex][columnIndex];
    }
    if (rowIndex >= m || columnIndex >= n) {
      return 0;
    }
    if (rowIndex === m - 1 && columnIndex === n - 1) {
      return 1;
    }
    memo[rowIndex] = memo[rowIndex] || {};
    memo[rowIndex][columnIndex] =
      aux(rowIndex + 1, columnIndex) + aux(rowIndex, columnIndex + 1);
    return memo[rowIndex][columnIndex];
  };
  return aux(0, 0);
};
