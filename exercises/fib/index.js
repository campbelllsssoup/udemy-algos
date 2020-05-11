// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* Thought process:

  Simple solution:

  - You could create the whole list of fibonacci from the beginning
  until the n-th entry, but that's probably gonna be a slow way to 
  accompish this.

  Better solution:

  - There's a formula to get the n-th fibonacci number from n. You should
  go ahead and use that.

  Formula: 
  
*/

/* iterative solution w/ array

function fib(n) {
  let num = 1;
  let arr = [0,1];
  for(let i = 2; i <= n; i++){
    num = arr[i-1] + arr[i-2];
    arr.push(num);
  }
  return arr[arr.length-1];  
}
*/

/* iterative solution w/o array

function fib(n){
  let step = 2;
  let prevOneNum = 1;
  let prevTwoNum = 0;

  while (step < n) {
    let newPrev = prevOneNum + prevTwoNum;
    prevTwoNum = prevOneNum;
    prevOneNum = newPrev;
    step++;    
  }
  return prevOneNum + prevTwoNum; 
}
*/

// recursive solution

function fib(n) {
  
  if (n <= 2) {
    return 1;
  } else {
    return fib(n-1) + fib(n-2);
  }
}




console.log(fib(4)); //=> 3
console.log(fib(9)); //=> 34 

module.exports = fib;
