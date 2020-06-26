// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document


// build your functions for readability and failure.
// always think of the edge case.

class Node {

  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let currNode = this.head;
    let count = 0;
    while (currNode) {
      currNode = currNode.next;
      count++;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currNode = this.head;
    while (currNode && currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  clear() { 
    this.head = null; 
  }

  removeFirst() {
    if (this.size() > 0) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let currNode = this.head;
    if ( !this.head ) { return "The list is empty."; }
    if ( !this.head.next ) { this.head = null; }
    while ( currNode.next && currNode.next.next ) {
      currNode = currNode.next;
    }
    currNode.next = null;
  }

  insertLast(data) {
    if ( this.head == null ) { this.head = new Node(data); return; }
    let currNode = this.head;
    while ( currNode.next ) { currNode = currNode.next; }
    currNode.next = new Node(data);
  }

  getAt(idx) {
    if (idx < 0 || idx > this.size() - 1) { return null; }
    let currIdx = 0;
    let currNode = this.head;
    while (currIdx < idx) {
      currNode = currNode.next;
      currIdx++;
    }
    console.log('line 87 currNode', currNode);
    return currNode;
  }

  removeAt(idx) {
    // check for edge cases
    let size = this.size();
    if (size === 0 || idx > size - 1 || idx < 0) { return null; }
    // Having trouble figuring this out... line 96 when I set this.head to this.head.next it doesn't make a permanent change to the linked list instance...
    if (idx === 0) { this.head = this.head.next; }

    // iteration
    let currIdx = 1;
    let prevNode = this.head;
    let currNode = this.head.next;
    while (currIdx < idx) {
      prevNode.next = currNode;
      currNode = currNode.next;
      currIdx++;
    }

    // swap refs
    prevNode.next = currNode.next;
    currNode.next = null;
  }

  insertAt(data, idx) {

  }
  // in an infinite loop somewhere...
}


module.exports = { Node, LinkedList };