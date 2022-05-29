const wordLadder = (beginWord, endWord, wordList) => {
  let set = new Set(wordList);
  if (!set.has(endWord)) return 0;
};
