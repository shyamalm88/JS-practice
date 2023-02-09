/**
 * Given an input string, reverse the string word by word.

Input: "the sky is blue",
Output: "blue is sky the".
 */

const reverseWords = (s) => {
  return s.split(" ").reverse().join(" ");
};

console.log(reverseWords("the sky is blue"));
