// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let procArr = [root, 's'];
  let widths = [0];
  while (procArr.length > 1) {
    const currNode = procArr.shift();
    if (currNode === 's') {
      widths.push(0);
      procArr.push('s');
    } else {  
      widths[widths.length - 1]++;
      procArr.push(...currNode.children);
    }
  }
  return widths;
}

module.exports = levelWidth;


// original solution
// function levelWidth(root) {
//  if (!root.children.length) { return [1]; }
//   let solution = [1, root.children.length];
//   let currLvl = [...root.children];
//   let nextLvl = [];
//   while (currLvl.length) {
//     for (let i=0; i < currLvl.length; i++) {
//       nextLvl.push(...currLvl[i].children);
//     }
//     if (!nextLvl.length) { return solution; }   // if 0 children, end of tree 
//     solution.push(nextLvl.length);              // push length onto solution arr  
//     currLvl = nextLvl;                          // shift currLvl
//     nextLvl = [];                               // reset nextLvl
//   }
//   return solution;
// }
