function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const serialize = (root) => {
  let current = [root];
  const result = [];
  while (current.length) {
    const next = [];
    current.forEach((node) => {
      result.push(node ? node.val : null);
      if (node) {
        next.push(node.left, node.right);
      }
    });
    current = next;
  }
  return JSON.stringify(result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data = "") => {
  const list = JSON.parse(data);
  if (list.length === 0 || list[0] === null) {
    return null;
  }
  const root = new TreeNode(list.shift());
  let current = [root];
  while (current.length > 0) {
    const next = [];
    current.forEach((node) => {
      if (node !== null) {
        const leftValue = list.shift();
        const rightValue = list.shift();
        node.left = leftValue == null ? null : new TreeNode(leftValue);
        node.right = rightValue == null ? null : new TreeNode(rightValue);
        next.push(node.left, node.right);
      }
    });

    current = next;
  }
  return root;
};
