// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// it's important to be able to detect circular lists, because all of our list
// methods assume that we have a singly linked, non-circular list.


function circular(list) {
  if (list.head == null) { return false; }
  // initialization
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    // iteration
    slow = slow.next;
    fast = fast.next.next;
    // check for circularity
    if (slow === fast) { return true; }
  }

  // some node's #next call equals null
  return false;
}

module.exports = circular;

