const levelOrder = function (root) {
  if (!root) {
    return levels;
  }
  const level = [];
  const que = [root];
  while (que.length) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      let node = que.shift();
      if (node.left) {
        que.push(node.left);
      }
      if (node.right) {
        que.push(node.right);
      }
      level.push(node.val);
    }
  }
  return level;
};
