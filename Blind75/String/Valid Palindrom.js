/**
 *
 * Description
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 */

const isPalindrome = function (s) {
  let newS = "";
  for (const c of s) {
    if (/[a-zA-Z0-9]/.test(c)) {
      newS += c.toLowerCase();
    }
  }
  for (let i = 0; i < Math.floor(newS.length / 2); i++) {
    if (newS[i] !== newS[newS.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
