// * Write a function to find the longest common prefix string amongst an array of strings.

// *If there is no common prefix, return an empty string "".

// * Input: ["flower","flow","flight"]
// * Output: "fl"

const longestCommonPrefix = (strs) => {
  let pref = "";
  outer: for (let i = 0; i < strs[0].length; i++) {
    let temp = strs[0][i];
    inner: for (let j = 1; j < strs.length; j++) {
      if (temp !== strs[j][i]) {
        break outer;
      }
    }
    pref += temp;
  }
  return pref;
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
