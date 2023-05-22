class Node {
  constructor(key = null, left = null, right = null) {
    this.data = key;
    this.left = left;
    this.right = right;
  }
}

function printBottomView(root) {
  // Create a dictionary where
  // key -> relative horizontal distance
  // of the node from root node and
  // value -> pair containing node's
  // value and its level
  const d = {};

  printBottomViewUtil(root, d, 0, 0);

  // Traverse the dictionary in sorted
  // order of their keys and print
  // the bottom view
  for (const i of Object.keys(d).sort(function (a, b) {
    return a - b;
  })) {
    console.log(d[i][0] + " ");
  }
}

function printBottomViewUtil(root, d, hd, level) {
  // Base case
  if (!root) {
    return;
  }

  // If current level is more than or equal
  // to maximum level seen so far for the
  // same horizontal distance or horizontal
  // distance is seen for the first time,
  // update the dictionary
  // console.log(d);
  if (hd in d) {
    // console.log("hd[data]", d[hd]);
    if (level >= d[hd][1]) {
      d[hd] = [root.data, level];
    }
  } else {
    d[hd] = [root.data, level];
  }

  // recur for left subtree by decreasing
  // horizontal distance and increasing
  // level by 1
  printBottomViewUtil(root.left, d, hd - 1, level + 1);

  // recur for right subtree by increasing
  // horizontal distance and increasing
  // level by 1
  printBottomViewUtil(root.right, d, hd + 1, level + 1);
}

if (require.main === module) {
  const root = new Node(20);
  root.left = new Node(8);
  root.right = new Node(22);
  root.left.left = new Node(5);
  root.left.right = new Node(3);
  root.right.left = new Node(4);
  root.right.right = new Node(25);
  root.left.right.left = new Node(10);
  root.left.right.right = new Node(14);

  console.log("Bottom view of the given binary tree :");

  printBottomView(root);
}
