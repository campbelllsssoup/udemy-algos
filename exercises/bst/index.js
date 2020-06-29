// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(newData) {
    // compare input data with current Node data until in position
    // I went with just inserting at the ends of the binary tree.... what about
    // inserting node into the middle of one? would that likely be more efficient?

    let currNode = this;
    while (currNode) {
      if (newData < currNode.data) {
        if (!currNode.left) {
          currNode.left = new Node(newData); 
          currNode = null;
        } else { 
          currNode = currNode.left; 
        }
      } else {
        if (!currNode.right) {
          currNode.right = new Node(newData);
          currNode = null;
        } else { 
          currNode = currNode.right;
        }
      }
    }
  }
  
  contains(seekData) {
    let currNode = this;
    while (currNode) {
      if (seekData === currNode.data) {
        return currNode;
      } else if (seekData < currNode.data) {
          currNode = currNode.left; 
      } else {
          currNode = currNode.right;
      }
    }
    return null;
  }

}

module.exports = Node;
