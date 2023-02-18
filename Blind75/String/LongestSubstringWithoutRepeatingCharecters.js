// * Given "abcabcbb", the answer is "abc", which the length is 3.
// * Given "bbbbb", the answer is "b", with the length of 1.
// * Given "pwwkew", the answer is "wke", with the length of 3. Note that the
// answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestNonRepeatingSubstring = (str) => {
  if (!str) return 0;

  let max = 0;
  let end = 0;
  let start = 0;
  let set = new Set();
  while (end < str.length) {
    if (!set.has(str[end])) {
      set.add(str[end]);
      end++;
      max = Math.max(max, set.size);
    } else {
      set.delete(str[start]);
      start++;
    }
  }
  return max;
};

console.log(lengthOfLongestNonRepeatingSubstring("abcabcbb"));
console.log(lengthOfLongestNonRepeatingSubstring("bbbbb"));
console.log(lengthOfLongestNonRepeatingSubstring("pwwkew"));
