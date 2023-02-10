function prefix(words) {
  // check border cases size 1 array and empty first word)
  if (!words[0] || words.length == 1) return words[0] || "";
  let i = 0;
  // while all words have the same character at position i, increment i
  while (words[0][i] && words.every((w) => w[i] === words[0][i])) i++;

  // prefix is the substring from the beginning to the last successfully checked i
  return words[0].substr(0, i);
}

console.log(1, prefix([]));
console.log(2, prefix([""]));
console.log(3, prefix(["abc"]));
console.log(4, prefix(["abcdefgh", "abcde", "abe"]));
console.log(5, prefix(["abc", "abc", "abc"]));
console.log(6, prefix(["abc", "abcde", "xyz"]));
