// * Given an array of strings, group anagrams together.

// * Example:

// *Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// *Output:
// *[
// *  ["ate","eat","tea"],
// *  ["nat","tan"],
// *  ["bat"]
// * ]

const groupAnagram = (strs) => {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].split("").sort().join("");
    if (!map[str]) {
      map[str] = [];
    }
    map[str].push(strs[i]);
  }
  return Object.values(map);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(strs));
