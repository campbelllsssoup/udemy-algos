// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/* Thought Process:

  Spiral Matrix - A 2-level array (matrix) where the numbers 
  ascend in a clock-wise manner throughout the matrix.

  create n subarray inside of the outermost array.

  Counting from 1 to n*n, add numbers to the 0-indexed array.

  When the 0-index array fills up start adding numbers to the end of 
  each subsequent sub-array until arr[num+1] == undefined;

  When the above happens add numbers from the tail end to the head end
  of the array.

  When arr[num][num-1] == undefined, start adding numbers going upward

  When arr[num-1][num] != 0, start going right again.


  ** Trick, setting the conditions that control when you are adding numbers
  in a L-to-R, T-to-B, R-to-L, or B-to-T manner. 
*/

// My solution:

function matrix(n) {
  let arr = [];
  let outInd = 0;      // outer index of array
  let innInd = 0;      // inner index of array
  let direction = "r"; // keeps track of the current direction: 'r' (right), 'l'
                       // (left), 'u' (up), 'd' (down)
  
  for (let i = 0; i < n; i++) {
    let innerArr = [];
    for (let j = 0; j < n; j++) {
      innerArr[j] = null;
    }
    arr[i] = innerArr;
  }


  for (let i = 1; i < (n * n) + 1; i++) {
    arr[outInd][innInd] = i;
    
    // below introduce the logic that controls which way you're adding
    // numbers. Use the fact that unfilled slots in an array will have a value 
    // of null, and out-of-bound slots will have a value of undefined.
    

    // refactor with case statement
    switch (direction){
      case 'r':
        if (arr[outInd][innInd + 1] !== null) {
          direction = 'd';
          outInd++;
        } else {
          innInd++;
        }
        break;  
      case 'd': 
        if (arr[outInd + 1] === undefined || arr[outInd + 1][innInd] !== null) {
          direction = 'l';
          innInd--;
        } else {
          outInd++;
        }
        break;
      case 'l': 
        if (arr[outInd][innInd - 1] !== null) {
          direction = 'u';
          outInd--;
        } else {
          innInd--;
        }
        break;
      case 'u': 
        if (arr[outInd - 1] === undefined || arr[outInd - 1][innInd] !== null) {
          direction = 'r';
          innInd++;
        } else {
          outInd--;
        }
        break;
      default:
        break;
    }    
  }
  return arr;
}

/* Solution #1:
  
*/

console.log(matrix(2)); 
console.log(matrix(3));
console.log(matrix(4));

module.exports = matrix;
