/**
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.
 */

var copyRandomList = function (head) {
  if (!head) return null;

  var map = new Map();
  var now = null;

  now = head;
  while (now) {
    map.set(now, new RandomListNode(now.label));
    now = now.next;
  }

  now = head;
  while (now) {
    map.get(now).next = map.get(now.next) || null;
    map.get(now).random = map.get(now.random) || null;
    now = now.next;
  }

  return map.get(head);
};
