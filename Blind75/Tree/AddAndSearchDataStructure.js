/**
 * Description
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]
Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 */

/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Add and Search Word - Data structure design
 */

class TrieNode {
  constructor(val) {
    this.end = false;
    this.val = val;
    this.children = {};
  }
}
// @lc code=start
/**
 * Initialize your data structure here.
 */
const WordDictionary = function () {
  this.root = new TrieNode("");
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (const c of word) {
    if (!node.children[c]) {
      node.children[c] = new TrieNode(c);
    }
    node = node.children[c];
  }
  node.end = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const aux = (index, node) => {
    if (!node) {
      return false;
    }
    const c = word[index];
    const { children } = node;
    if (index === word.length - 1) {
      return Object.values(children).some(
        (child) => child.end && (c === "." || c === child.val)
      );
    }
    if (c === ".") {
      return Object.values(children).some((child) => aux(index + 1, child));
    }
    if (!node.children[c]) {
      return false;
    }
    return aux(index + 1, node.children[c]);
  };
  return aux(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
