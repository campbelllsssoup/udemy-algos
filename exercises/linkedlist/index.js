// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

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
    if (this.head === null) { return 0; }
    let currNode = this.head;
    let count = 1;
    while (currNode.next !== null) {
      currNode = currNode.next; // you forgot this when whiteboarding.
      count++;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head === null) { return null; }
    let currNode = this.head;
    while (currNode.next) {
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
    if ( !this.head ) { this.insertFirst(data); }
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
    return currNode;
  }

  // removeAt(idx) {
  //   let size = this.size();
  //   if (size > 0) {
  //     if (idx >= 0 && idx <= this.size() - 1) { // checks if index within bounds
  //       if (idx === 0) { this.removeFirst(); }// handle the case of having only one node
  //       let currIdx = 0;
  //       let currNode = this.head;
  //       let prevNode = null;
  //       while (currIdx < idx - 1) {
  //         prevNode = currNode;
  //         currNode = currNode.next;
  //         currIdx++;
  //       }
  //       console.log(prevNode)
  //       // prevNode.next = currNode.next;
  //     }
  //     console.log("Out of bounds.")

  //   }
  //   // currNode.next = null;
  //   // currNode.data = null;
  // }

  

  // insertAt(data, idx) {
  //   if (this.size < idx + 1) {
  //     this.insertLast(data);
  //   } else if (idx < 0) {
  //     this.insertFirst(data);
  //   } else {
  //     let currNode = this.head;
  //     let count = 0;
  //     while (count + 1 < idx) {
  //       currNode = currNode.next;
  //     }
  //     let nthNode = currNode.next;
  //     currNode.next = newNode(data, nthNode);
  //   }
  // }
  // in an infinite loop somewhere...
}

module.exports = { Node, LinkedList };