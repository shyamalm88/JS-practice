// * Given "abcabcbb", the answer is "abc", which the length is 3.
// * Given "bbbbb", the answer is "b", with the length of 1.
// * Given "pwwkew", the answer is "wke", with the length of 3. Note that the
// answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = (str) => {
  const map = new Map();
  let start = 0;
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) != undefined) {
      start = Math.max(start, map.get(str[i]) + 1);
    }
    map.set(str[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
