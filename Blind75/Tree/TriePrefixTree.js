/**
 * Description
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");

trie.search("app");     // returns true
 */

/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */
class TrieNode {
  constructor(val) {
    this.val = val;
    this.children = {};
    this.word = false;
  }
}
// @lc code=start
/**
 * Initialize your data structure here.
 */
const Trie = function () {
  this.root = new TrieNode("");
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (const c of word) {
    if (!node.children[c]) {
      node.children[c] = new TrieNode(c);
      node = node.children[c];
    } else {
      node = node.children[c];
    }
  }
  node.word = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (const c of word) {
    if (!node.children[c]) {
      return false;
    }
    node = node.children[c];
  }
  return node.word;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (const c of prefix) {
    if (!node.children[c]) {
      return false;
    }
    node = node.children[c];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
