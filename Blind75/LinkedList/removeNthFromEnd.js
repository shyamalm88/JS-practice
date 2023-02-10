let head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const removeNthFromEnd = (head, n) => {
  let start = new Node();
  start.next = head;
  let fast = start;
  let slow = start;

  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return slow.next;
};

const printList = (node) => {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
};

const push = (data) => {
  var temp = new Node(data);
  temp.next = head;
  head = temp;
};

push(85);
push(15);
push(4);
push(20);
printList(head);
console.log("==========");
removeNthFromEnd(head, 2);
printList(head);
