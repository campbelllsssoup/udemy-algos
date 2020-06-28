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
    // if (this.head == null) {return null;}
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
    this.head = this.head ? this.head.next : null;
  }

  removeLast() {
    if ( this.head == null ) { return "The list is empty."; } // size = 0
    if ( this.head.next == null ) { this.head = null; return;}       // size = 1
    let currNode = this.head;                          
    while ( currNode.next && currNode.next.next ) {    
      currNode = currNode.next;
    }
    currNode.next = null;
  }

  insertLast(data) {
    // use getLast helper
    if (!this.head) { this.head = new Node(data); return;}
    this.getLast().next = new Node(data);

    // use getAt helper
  }

  getAt(idx) {
    if (idx < 0 || idx > this.size() - 1) { return null; }
    let currIdx = 0;
    let currNode = this.head;
    while (currIdx < idx) {
      currNode = currNode.next;
      currIdx++;
    }
    return currNode;
  }

  removeAt(idx) {
    // use #getAt helper
    let size = this.size();
    if (size === 0 || idx > size - 1 || idx < 0) { return null; }
    if (idx === 0) { this.head = this.head.next; return null; }
    let prevNode = this.getAt(idx-1);
    prevNode.next = prevNode.next.next 
  }

  insertAt(data, idx) {
    let size = this.size();
    // edge cases
    if (size === 0 || idx === 0) { this.head = new Node(data, this.head); return;}
    let prevNode = this.getAt(idx - 1) || this.getAt(size - 1);
    prevNode.next = new Node(data, prevNode.next);
  
  }

  // refactor + reduce code
  // for '_first' '_last' methods, use '_at' helpers 
  // insert(create), get (read), remove (delete) + [learn update op]

  // right now methods are tangled, decrease that


  // forEach function


  // for..of functionality
}


module.exports = { Node, LinkedList };