// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* Thought process:

  Create a counter that starts at 0 and keeps track of how many vowels are in the string.

  Create an array of vowels so that you can use the .include method inside of a for-loop to tell if
  a letter is a vowel or not.

  Iterator over the string using the for-of syntax and add one to counter if you encounter a, e, i, o, or u.

  Return the number of vowels counted.
*/

/* My solution && Solution #1:

function vowels(str) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  
  return count;
}
*/


// Solution #2 - RegEx w/ String#match:

function vowels(str) {
  /* Line 47 takes a string and uses a regular expression to 
     match if any character a, e, i, o, or u is present in the 
     string. If none of the characters are present the match method
     will return null, else it will return an array of matches
     that it found. The reason it returns an array is becuase we
     have used the global (g) option for the RegEx obj, and we disregard
     the case when we use i (case-insensitive). */
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}


console.log(vowels('Hi There!')); // --> 3
console.log(vowels('Why do you ask?')); // --> 4
console.log(vowels('Why?')); // --> 0

module.exports = vowels;
