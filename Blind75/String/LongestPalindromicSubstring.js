/**
 * Description
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */

const longestPalindrome = (s = "") => {
  const memo = {};
  const isPalindrome = (left, right) => {
    if (left === right) {
      return true;
    }
    for (let i = left; i <= Math.floor((left + right) / 2); i++) {
      if (s[i] !== s[right - i + left]) {
        return false;
      }
    }
    return true;
  };
  const aux = (left, right) => {
    if (left > right) {
      return "";
    }
    memo[left] = memo[left] || {};
    if (memo[left][right] !== undefined) {
      return memo[left][right];
    }
    if (isPalindrome(left, right)) {
      return s.substring(left, right + 1);
    }
    memo[left][right] =
      aux(left + 1, right).length > aux(left, right - 1).length
        ? aux(left + 1, right)
        : aux(left, right - 1);
    return memo[left][right];
  };
  return aux(0, s.length - 1);
};
