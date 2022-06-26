class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.map = new Map();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  insert(node) {
    this.map.set(node.key, node);
    let headNext = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    headNext.prev = node;
    node.next = headNext;
  }

  get(key) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      this.remove(node);
      this.insert(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.remove(this.map.get(key));
    }
    if (this.map.size === this.capacity) {
      this.remove(this.tail.prev);
    }
    this.insert(new Node(key, value));
  }

  remove(node) {
    this.map.delete(node.key);
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  getLRU() {
    return this.tail.prev;
  }
}

const l1 = new LRUCache(3);
l1.insert(new Node(1, 1));
l1.insert(new Node(2, 2));
console.log(l1.get(1));
console.log(l1.getLRU());
l1.put(1, 10);
l1.put(3, 30);
console.log(l1.get(2));
console.log(l1.getLRU());
