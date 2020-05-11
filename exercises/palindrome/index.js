// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* MY SOLUTION

function palindrome(str) {
  return str.split('').reverse().join('') === str;
}
*/


/* Solution #1

function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

*/

/* My every solution

function palindrome(str) {

  let reversedArr = str.split('').reverse('');
  let strArr = str.split('');  

  return reversedArr.every(((val, i) => val === strArr[i]));
}
*/

/* More optimized

// Quits checking for matches after it reaches the middle letter.

function palindrome(str) {
  let strArr = str.split('');
  let end = strArr.length % 2 === 0 ? (strArr.length / 2) - 1 : Math.floor(strArr.length / 2);
  for (let i=0; i < end; i++ ) {
    if (strArr[i] !== strArr[strArr.length - (i+1)]) {
      return false;
    }
  }
  return true;
}

*/

/* Solution #2

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str.split('')[str.length-(i+1)];
  })
}
*/




module.exports = palindrome;
