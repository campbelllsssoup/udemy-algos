// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }

}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insertFirst(data) {
    const node = new Node(data);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  size() {
    if (this.head == null) return 0;
    let currentNode = this.head;
    let count = 1;
    while (currentNode.next) {
      count += 1;
      currentNode = currentNode.next;
    }
    return count;
  }
  
  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      }
    }
    const tail = currentNode;
    return tail;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    let newHead = this.head.next;
    this.head.next = null;
    this.head = newHead;
  }

  removeLast() {
    let currentNode = this.head;
    if (this.size < 2) {
      this.head = null;
    } else if (currentNode.next) {
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
    }
  }
}

const n = new Node('There');
const m = new Node('M');
const list = new LinkedList();
list.insertFirst(n);
list.insertFirst(m);
console.log(list.size());
list.removeLast();
console.log(list.size());

module.exports = { Node, LinkedList };