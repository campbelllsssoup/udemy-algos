// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/* Thought Process:

  Convert the string into an array of words using Array#split.

  Iterate over each element in the array and call the String#toUpperCase
  function.

  Join the modified array into a string separted by space characters using .join().

  return the solution.

*/



/* My solution:

function capitalize(str) {
  let strArr = str.split(' ');
  strArr = strArr.map((word) => {
    return word[0].toUpperCase() + word.substring(1,word.length);
  });
  let solution = strArr.join(' ');
  return solution;
}
*/

/* Using reduce
function capitalize(str) {
  let strArr = str.split(' ');
  let solution = strArr.reduce((str, word) => {
    if ( strArr[strArr.indexOf(word) + 1] !== undefined ) {
      return str += word[0].toUpperCase() + word.substring(1, word.length) + ' ';
    } else {
      return str += word[0].toUpperCase() + word.substring(1, word.length);
    }
  }, '');
  return solution;
}
*/

// Solution #1:
/* 

   use the String.prototype.slice method -
   the first argument is the start index of the string, second
   optional argument is the ending index of which to slice the
   string. 

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}
*/

// Solution #2:

/* 
   instead of definitively capitalizing first character,
   you could instead find the first A-Z character and
   capitalize it.

   Good handling for example: '¿Que tal?';
*/

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i-1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;   
}

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));

module.exports = capitalize;
