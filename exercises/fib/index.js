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


/* 
  ** FINISHES BETWEEN 0.55 AND 0.71s ON MY COMPUTER. **
  memoized recursive solutions usually perform just as well 
  or better than iterative ones.

  Recursive solutions that utilize dynamic programming are the way to go, they 
  save you loads of time AND leave you with a solution that is readable. 
  
  Two types of Dynamic Programming:

  1) Memoization A.K.A. "Top-Down Dynamic Programming"
  2) Tabulation A.K.A. "Bottom-Up Dynamic Programming"

  1) TDDP / Memoization: We start with the original problem and work our way down 
  through the subproblems (as we did in this function), saving results for each 
  input as we go along into a cache.

    Pros: This is a more natural way to solve a problem, and you only run the
    sub-process for numbers that will actually be used to solve the big problem.

    Cons: May cause memory problems because it might have stacked the recursive 
    calls to find the solution of the deeper recursive call. Also, memoization is
    generally slower than tabulation because of the large recursive calls.

  2) BUDP / Tabulation: We start with the smallest input that will be used in 
  solving the original problem, and work our way up through numbers until we hit 
  the input number for the original problem - saving each the result for each 
  input as we go along. Then, after hitting the original input, we run the 
  program using our cache (which contains results for all inputs from 1 - n).

    Pros: This method is generally faster than memoization. Less likely to cause
    memory problems that can come from deep recursive calls.

    Cons: You may end up calculating values for certain inputs that you don't
    use in solving the problem. Also, coming up with a BUDP solution isn't as 
    natural as coming up with a TDDP solution.


  IMPORTANT: How to decide between memoization or tabulation?

  Tabulation - the original problem requires all subproblems to be solved, 
  tabulation usually outperformes memoization by a constant factor. This is 
  because tabulation has no overhead for recursion and can use a preallocated 
  array rather than, say, a hash map.

  Memoization - If only some of the subproblems need to be solved for the 
  original problem to be solved, then memoization is preferrable since the 
  subproblems are solved lazily, i.e. precisely the computations that are needed 
  are carried out.
*/

function recursiveTwoFib(n) {
  if (n <= 2) {    // Establish a base case
    return 1;
  } else {
    // not utilizing tail recursion. Utitlize tail recursion to optimize.
    // utilizing memoization.

    // when memoizing, make sure you're calling the memoized version of the fn
    // at the end where you're making your recursive call.
    return newFib(n-1) + newFib(n-2);
  }
}



// comment in when using memoizing recursive solution
const newFib = memoize(recursiveTwoFib)

// the solution breaks down when n > 97 due to floating point inaccuracies.


// It's unfeasible to run the below two console.log statements when using 
// un-memoized recursive solution.

console.log('fib(90)', newFib(90) === 2880067194370816120);
console.log('fib(97)', newFib(97) === 83621143489848422977);

let fib = newFib;

module.exports = fib;


/* iterative solution w/o array */
// Between 0.55s & 0.713s when running the test suite on my computer.

function iterativeFib(nthIndex) {
  // Initialize vars phase
  let numOne = 0;
  let numTwo = 1;
  let currentIndex = 2;

  // work phase
  while (currentIndex <= nthIndex) {
    let newNumTwo = numOne + numTwo;
    numOne = numTwo;
    numTwo = newNumTwo;
    currentIndex += 1;
  }

  return numTwo;
}


// recursive solution - more expensive but understandable.
// Between 1.1 & 1.482s when running the test suite on my computer.

function recursiveOneFib(n) {
  // fib never runs on a case of fib(2), so you don't 
  // get a case where `fib(2-2) === 0`. The lowest
  // n where ever be where it calls more fibs is 
  // 3, and `fib(3-1) === 1` ... so the base case is clean
  // and well established.

  if (n <= 2) {    // Establish a base case
    return 1;
  } else {
    // not utilizing tail recursion. Utitlize tail recursion to optimize.
    // not utilizing memoization - utilize it to make this faster.
    return recursiveOneFib(n-1) + recursiveOneFib(n-2);
  }
}

// alternate recursive solution

// function fib(n) {
//   if (n === 0) { // 0th index in sequence.
//     return 0;
//   } else if (n === 1) { // 1st index in sequence.
//     return 1;
//   } else { 
//     return fib(n-1) + fib(n-2);
//   }
// }




/* ----------------------------------------------------------------------------------



NOTE: I wanted to see if there was a mathematical equation that could be used to calculate
the n-th fibonacci number, and it turns out there is. The Binet formula allows you to input
the n-th number you desire in the sequence, and get out the n-th number's value.

The issue with trying to calculate this lies in that fact that mostly all modern languages
use floating-point precision arithmetic in order to perform calculations. The benefit of this approach is that
with bigger numbers - calculations are faster. The con is that floating point arithmetic is inherently inaccurate - 
this only becomes apparent when you're dealing with VERY large numbers.

If we desire accuracy at the cost of a more expensive operation, we could use Python and it's
SymPy library (symbolic computation / computer algebra system) in order to perform symbolic computations.

This level of accuracy is especially importance if you're working in the finance or data sector.


// Binet's formula solution


// floating point arithmetic here seems to break down once you reach the quadrillion threshold.
// the computer starts to round after that point.

* only accurate up to when `n === 76`

(Ex: when n === 400, the answer is not correct.)

function binetFib (n) {
    // as we use sqrt(5), pre-calculate it to make the formula look neater
    const sqrtFive = (Math.sqrt(5));

    let result = ( Math.pow((1 + sqrtFive), n) - Math.pow((1 - sqrtFive), n) ) / ( Math.pow(2, n) * sqrtFive );

    return result;
}

*/




/*
    FOR FUN: PYTHON SCRIPT TO SOLVE N-TH FIBONACCI NUM PROBLEM

    print "Program to find the nth Fibonacci number using Binet's formula."

    def nthfib(n): # Function to calcualte the nth Fibonacci number.
        root5 = 5**.5
        ans = ((1+root5)/2)**n - ((1 - root5)/2)**n
        ans2 =root5**(-1)*ans
        return int(ans2)
    print "The first 100 Fibonacci numbers using Binet's formula:"
    for k in range(1,101):
      print nthfib(k),
      
    print ""
    print ""
    print "The 100th Fibonacci number is", nthfib(100)

*/
