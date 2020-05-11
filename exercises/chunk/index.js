// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


/*
  Trick: modulo operator to determine when you need to create
  a new chunk (subarray)
*/


/* My solution:

function chunk(array, size) {
  let chunked = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0 || i % size === 0) { 
      let newChunk = [array[i]];
      chunked.push(newChunk);
    } else {
      chunked[chunked.length - 1].push(array[i]);
    }
  }
  return chunked;
}
*/

/* Solution #1:

function chunk(arr, size){
  const chunked = [];

  for (let element of arr) {
    const last = chunked[chunked.length-1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}
*/

// Solution #2: use Array.prototype.slice
// takes less steps than the previous solution 

function chunk(arr, size){
  const chunked = [];
  let index = 0;
  
  while (index < arr.length) {
    chunked.push(arr.slice(index, index+size));
    index += size;
  }
  return chunked;
}

chunk([1, 2, 3, 4], 2); // --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2); // --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4); // --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10); // --> [[ 1, 2, 3, 4, 5]]

module.exports = chunk;
