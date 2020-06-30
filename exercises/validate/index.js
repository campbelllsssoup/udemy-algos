// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // check if current node's data satisfies BST rule.
  if (min && node.data < min) { return false; }
  if (max && node.data > max) { return false; }
  
  // recurse through the subtrees, passing along the current data's info as
  // a new set of bounds.
  if (node.right && !validate(node.right, node.data, max)) { return false; }
  if (node.left && !validate(node.left, min, node.data)) { return false; }
  
  // if no return statements are hit, each node satisfies the rule.
  return true;
}

module.exports = validate;
