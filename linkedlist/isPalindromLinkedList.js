let head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const middleOfLinkedList = (head) => {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // console.log(slow.data);
  return slow;
};

const reverseLinkedLIst = (head) => {
  let prev = null;
  let current = head;
  let next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const isPalindromeLinkedList = (head) => {
  let fast = head;
  let slow = reverseLinkedLIst(middleOfLinkedList(head));
  while (slow != null) {
    if (slow.data != fast.data) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
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

push(1);
push(2);
push(3);
push(4);
push(3);
push(2);
push(1);
push(0);
printList(head);
console.log("==========");
console.log(isPalindromeLinkedList(head));
// reverseLinkedLIst(head);
