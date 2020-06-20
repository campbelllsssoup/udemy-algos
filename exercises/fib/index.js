// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/*
memoization:
  Record the arguments of each function call. 

  Run the function.

  Store the result of the function call.

  If the function is called again with the same arguments, used the saved value
  instead of calling the function again.

  Serves as a cacheing layer.
*/ 

// recursive memoized solution //

// generic memoize function
// higher order function
function memoize(fn) {
  const cache = {};

  return function(...args) {
    // if arguments are already present as a key in the 
    // cache object, then retreive its' value (the return value of the fn call)
    if (cache[args]) {
      return cache[args];
    }
    // `this` is the global object, can use apply
    // with null OR `this` in this case.
    const result = fn.apply(null, args);

    // save the args as a key in the cache object,, save result as value.
    cache[args] = result;
    
    return result;
  }
}

function fib(n) {
  if (n <= 2) {    // Establish a base case
    return 1;
  } else {
    // not utilizing tail recursion. Utitlize tail recursion to optimize.
    // not utilizing memoization - utilize it to make this faster.

    // when memoizing, make sure you're calling the memoized version of the fn
    // at the end where you're recursing
    return newFib(n-1) + newFib(n-2);
  }
}

const newFib = memoize(fib)

console.log(fib(4)); //=> 3
console.log(fib(9)); //=> 34 

module.exports = fib;


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

// function fib(n) {
//   if (n <= 2) {    // Establish a base case
//     return 1;
//   } else {
//     // not utilizing tail recursion. Utitlize tail recursion to optimize.
//     // not utilizing memoization - utilize it to make this faster.
//     return fib(n-1) + fib(n-2);
//   }
// }
