// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/* Thought process:

  The number of spaces in the string will equal (n * 2) - 1;
  create a variable to hold the above number for each function call

  Use a for loop to count from 1 to the n,, for each step in the loop
  output that step's pyramid level.

  ^^ in order to put a pound sign in the middle - use the string's index
  of n - 1.

  ^^ for each subsequent step after the first step add a pound sign to both
  sides of the current pyramid
  

*/

// My iterative solution:

//function pyramid(n) {
//  let strLen = (n * 2) - 1;
//  let start = n - 1;
//  let end = n;
//  for (let i = 1; i <= n; i++) {
//    let str = '';
//    for (let j = 0; j < strLen; j++) {
//      if (j >= start && j < end) {
//        str += "#";
//      } else {
//        str += ' ';
//      }
//      /* explains nested for loop.
//        adds a character to the string for strLen steps
//        range of #'s === 2,3 (j == 0, n == 3); 1,4 (j == 1, n == 3); 0,5 (j == 2, n == 3);
//      */ 
//    }
//    console.log(str);
//    start--;
//    end++;
//  }
//}


/* My Iterative Solution #2 (refactored):

const pyramid = (n) => {
  let strLength = (n*2)-1;
  let mid = Math.floor(strLength / 2);
  let start = mid;
  let end = mid;
  for(let i=0; i < n; i++){
    let level = '';
    for (let j = 0; j < strLength; j++){
      level += (j >= start && j <= end) ? '#' : ' ';
    }
    console.log(level);
    start--;
    end++;
  }
}
*/

/* Solution #1 (Iterative):

const pyramid = (n) => {
  const midpoint = Math.floor((2 * n -1) / 2);
  for (let row = 0; row < n; row++){
    let level = '';
    
    for(let column = 0; column < (n * 2) - 1; column++){
      level += (midpoint - row <= column && midpoint + row >= column) ? "#" : ' ';
    }
  }
}

*/

// Solution #2 (recursion):

const pyramid = (n, row = 0, level = '') => {
  let midpoint = Math.floor(((n*2) - 1) / 2);
  if (n === row) return;
  if (level.length === (n*2) - 1) {
    console.log(level);
    return pyramid(n, row+1);
  }
  let char;
  if (level.length >= midpoint - row && level.length <= midpoint + row) {
    char = '#';
  } else {
    char = ' ';
  }
  pyramid(n, row, level + char);  
}





pyramid(50);

module.exports = pyramid;
