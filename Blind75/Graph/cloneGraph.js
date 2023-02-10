const cloneGraph = function (node) {
  const oldToNew = {};
  dfs(node, oldToNew);
};

const dfs = function (node, oldToNew) {
  if (node in oldToNew) {
    return oldToNew[node];
  }
  let copy = new Node(node.val);
  oldToNew[node] = copy;

  for (nei in neighbors) {
    copy.neighbors.push(dfs(nei, oldToNew));
  }
  return copy;
};
