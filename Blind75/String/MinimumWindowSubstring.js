/**
 * Description
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
 */

const minWindow = (s = "", t = "") => {
  const tMap = {};
  const count = t.length;
  for (const c of t) {
    tMap[c] = (tMap[c] || 0) + 1;
  }
  let left = 0;
  const sMap = {};
  let currentCount = 0;
  let result = "";
  for (let right = 0; right < s.length; right += 1) {
    if (tMap[s[right]]) {
      sMap[s[right]] = (sMap[s[right]] || 0) + 1;
      if (sMap[s[right]] <= tMap[s[right]]) {
        currentCount += 1;
      }
    }

    while (
      currentCount >= count &&
      (sMap[s[left]] > tMap[s[left]] || !tMap[s[left]])
    ) {
      if (sMap[s[left]] > tMap[s[left]]) {
        sMap[s[left]] -= 1;
      }
      left += 1;
    }
    if (currentCount >= count) {
      if (result === "") {
        result = s.slice(left, right + 1);
      } else {
        result =
          right - left + 1 < result.length ? s.slice(left, right + 1) : result;
      }
    }
  }
  return result;
};
