// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort



// walk through array n times, n steps each time.

// for each walk, check if the current element's value is greater than the
// next element. If so swap the two elements.

// bubble sort = sorting from greatest to least, greatest first @ end, unsorted section shrinks right to left.
// simple but slow - n^2 complexity
function bubbleSort(arr) {
  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) { // -i since for each iteration the next greatest is already at the end sorted.
      // check if current el j is greater than next, if so switch
      if (arr[j] > arr[j+1]) {
        let oldNext = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = oldNext;
      }
    }
  }
  return arr;
}

// keep a track of min index value, and when you find it swap that element
// w/ the element of the current i index you're on.

// selection sort = sorting from least to greatest, least first @ beginning, unsorted section shrinks left to right.
// simple but slow - n^2 time complexity
function selectionSort(arr) {
  for (let i=0; i < arr.length; i++) {
    let minIdx = i; // key

    for (let j=i+1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) { minIdx = j; } // check if current el is lower than minEl
    }

    if (arr[minIdx] < arr[i]) {
      // swap elements
      let newMin = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = newMin;
    }
  }
  return arr;
} 


// turtles all the way down
// think about how the recursion occurs + control flow...
// run through n == 2 case,,, n == 4 case.
// similar to the way fibonacci sequence recursion example worked.
function mergeSort(arr) {
  // return if only one element in array
  if (arr.length === 1) { return arr; }

  // divide array into two equal halves
  const center = Math.floor(arr.length/2);
  const left = arr.slice(0,center); // make a shallow copy from start to but not including center index.
  const right = arr.slice(center); // shallow copy from center index to end.

  // keep breaking down both halves into smaller halves until they're .
  let sortedL = mergeSort(left);
  let sortedR = mergeSort(right);
;
  return merge(sortedL, sortedR); 
}




// you have two variables, and two arrays.
// each array starts out sorted.
// walk through each of the arrays with variables that refer
// to the 'next' element in the current array.
// when one array exhausts, append the reamiming array to sorted merged array.
// helper function for mergeSort
function merge(left, right) {
  let merged = [];
  while (left.length && right.length) {
    let leastVal = left[0] < right[0] ? left.shift() : right.shift();
    merged.push(leastVal);
  }
  return [...merged, ...left, ...right];
}



module.exports = { bubbleSort, selectionSort, mergeSort, merge };


/* iterative solution - bubbleSort
 
function bubbleSort(arr) {
  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // check if current el j is greater than next, if so switch
      if (arr[j] > arr[j+1]) {
        let oldNext = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = oldNext;
      }
    }
  }
  return arr;
}

*/

