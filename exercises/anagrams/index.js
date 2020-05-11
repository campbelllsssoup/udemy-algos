// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* Tips / Tricks:

  1. Use regular expressions to replace puncutation and spaces 
     from the string. (Regular expression + String.prototype.replace
     method.))

  2. Use for-in syntax to iterate through objects and compare one object's key-value pair to another object's key-value pair to see if the value's are equal.

  3. Use Object.keys(obj).length to determine if one object has the same number of keys as another object.

*/


/* Thought Process:

  First - strip each string of it's spaces and punctuation using the String replace method.
  I used a regular expression to make the matches global - there may be a cleaner way
  to do this.

  Create maps to record the frequency of each character in each string

  Check if both mapA & mapB have the same number of keys, if not the strings aren't angrams

  Iterate through one mapA and see if each property's value matches the same property for mapB
  If they are not the same - the strings aren't anagrams and return false.

  If the above tests pass, the strings are anagrams - return true!

*/


/* My solution:

function anagrams(stringA, stringB) {
  let strA = stringA.replace(/(\s|[?!.*&^+=%$#@~,-])/g, '').toLowerCase();
  let strB = stringB.replace(/(\s|[?!.*&^+=%$#@~,-])/g, '').toLowerCase();
  let mapA = mapOut(strA);
  let mapB = mapOut(strB);
  
  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) return false;
  }

  return true;
}

function mapOut(str){
  
  // helper function that records the frequency of each character in a string

  let map = {};
  for (let char of str) {
    if (map[char]){
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }
  return map;
}

*/


/* Solution #1:

// /[^\w]/g regular expression to only match alphanumeric characters

// after using the replace method with the above regular expression - chain the Sring.prototype.toLowerCase method to the result.

// after filtering out punctuation and making all characters lowercase,, convert each string into a characer map in order to comapre them


function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap) !== Object.keys(bCharMap)) {
    return false;
  } 

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]){
      return false;
    }
  }
  
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
*/

/* Solution #2 tricks:
  
  1. Replace the punctuation and whitespace characters in each string.

  2. Call split on both arrays to convert each string into an array where each element corresponds to each character in the string.

  3. Use the sort method to sort both arrays.

  4. Join both arrays by calling  the join('')  method.

  5. Compare the fully processed string to each other to see if they are equal - if so then the strings are anagrams and return true,, if not return false.
*/

// Solution #2:

function anagrams(strA, strB) {
  return cleanString(strA) === cleanString(strB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join('');
}

module.exports = anagrams;
