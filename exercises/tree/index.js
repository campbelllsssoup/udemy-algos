// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(targData) {
    // this will remove all of the instances of nodes with data === targData
    this.children = this.children.filter(currNode => currNode.data !== targData)
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    this.traverse('breadth', fn);
  }


  traverseDF(fn) {
    this.traverse('depth', fn);
  }

  traverse(method, fn) {
    let procArr = [this.root];
    while (procArr.length) {
      let currNode = procArr.shift();     // init current node, remove from procArr
      fn(currNode);                       // invoke callback
      method === 'depth' ?                // add children to beginning / end of procArr
        procArr.unshift(...currNode.children) : // DFS
        procArr.push(...currNode.children)      // BFS
    }
  }

  // with breadthFirst search, place children nodes at the end of process array
  // with depthFirst search, place children node at the beginning of the array
}



module.exports = { Tree, Node };


/* My original BFS / DFS solutions:

  traverseBF(fn) {
    let nodeList = [this.root];
    while (!!nodeList[0] === true) {
      fn(nodeList[0]); // run the function for the current element
      nodeList = nodeList.concat(nodeList[0].children); // remember concat is a non-destructive method
      nodeList.shift();
    }
  }

  traverseDF(fn) {
    let nodeList = [this.root];
    while (!!nodeList[0]) {
      let currNode = nodeList[0];
      fn(currNode);
      nodeList.shift();
      nodeList.unshift(...currNode.children);
    }
  }

*/
