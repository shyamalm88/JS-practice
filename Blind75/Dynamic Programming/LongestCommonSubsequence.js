/**
 * Description
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

 

If there is no common subsequence, return 0.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 */

const longestCommonSubsequence = function (text1, text2) {
  let previous = new Array(text2.length + 1).fill(0);
  for (let i = text1.length - 1; i >= 0; i--) {
    const current = new Array(text2.length + 1).fill(0);
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        current[j] = 1 + previous[j + 1];
      } else {
        current[j] = Math.max(current[j + 1], previous[j]);
      }
    }
    previous = current;
  }
  return previous[0];
};
