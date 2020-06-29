// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'


/*

  n < list.size()

  * don't use LinkedList.prototype.size()

  1)  set a slow & fast node to head. if the list isn't empty, will equal head


*/

function fromLast(list, n) {
  if (list.head === null) { return null; }
  // initialize vars
  let slow = list.head;
  let fast = list.head;
  let count = 0;
  while (count < n) {
    fast = fast.next;
    count++;
  }

  // work - proceed each node by one each cycle. stop loop when fast.next == null;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;


