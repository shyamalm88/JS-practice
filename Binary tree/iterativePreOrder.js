// Javascript program to implement iterative
// preorder traversal

// A binary tree node
class Node {
  constructor(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

let root = null;

const iterativePreorder = function (node) {
  if (node == null) {
    return;
  }
  let nodeStack = [];
  nodeStack.push(root);
  while (nodeStack.length > 0) {
    let mynode = nodeStack[nodeStack.length - 1];
    console.log(mynode.data + " ");
    nodeStack.pop();

    if (mynode.right != null) {
      nodeStack.push(mynode.right);
    }
    if (mynode.left != null) {
      nodeStack.push(mynode.left);
    }
  }
};

// Driver Code
root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

iterativePreorder(root);

// This code is contributed by itsok
