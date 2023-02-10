/**
 * Description
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 */

const isPalindrome = (left, right, s) => {
  if (left === right) {
    return true;
  }
  for (let i = left; i <= right; i++) {
    if (s[i] !== s[right - i + left]) {
      return false;
    }
  }
  return true;
};

const countSubstrings = (s = "") => {
  const dp = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    count += 1;
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        dp[j][i] = i - j < 3 || dp[j + 1][i - 1];
      } else {
        dp[j][i] = false;
      }

      if (dp[j][i]) {
        count += 1;
      }
    }
  }
  return count;
};
