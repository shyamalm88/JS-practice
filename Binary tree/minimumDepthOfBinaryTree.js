class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}
// Root of the Binary Tree
let root;

function minimumDepth() {
  return minimumDepth(root);
}

/* Function to calculate the minimum depth of the tree */
function minimumDepth(root) {
  // Corner case. Should never be hit unless the code is
  // called on root = NULL
  if (root == null) return 0;

  // Base case : Leaf Node. This accounts for height = 1.
  if (root.left == null && root.right == null) return 1;

  // If left subtree is NULL, recur for right subtree
  if (root.left == null) return minimumDepth(root.right) + 1;

  // If right subtree is NULL, recur for left subtree
  if (root.right == null) return minimumDepth(root.left) + 1;

  return Math.min(minimumDepth(root.left), minimumDepth(root.right)) + 1;
}

/* Driver program to test above functions */

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("The minimum depth of " + "binary tree is : " + minimumDepth(root));
