// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }


// take in a list, return the middle node in the list
// use the n + 1, m + 2 trick until m == null
// since we can't use numbers, you're keeping a reference to every node +
// every second node. When your m ref for every second node is going to be equal,
// you can return the n ref as the midpoint.

// draw it out if this doesn't make sense to you or others

// if list is even, use the length / 2 - 1 index node.

function midpoint(list) {
  // edge cases, list is empty. list contains only one node
  if (!list.head || !list.head.next) { return this.head; }
  let countByOneNode = list.head;
  let countByTwoNode = list.head.next;

  // iteration
  while (countByTwoNode.next && countByTwoNode.next.next) {
    countByOneNode = countByOneNode.next;
    countByTwoNode = countByTwoNode.next.next;
  }

  // resolution
  let isOddLength = !!countByTwoNode.next;
  if (isOddLength) {
    return countByOneNode.next;
  } else {
    return countByOneNode;
  }
}

module.exports = midpoint;
