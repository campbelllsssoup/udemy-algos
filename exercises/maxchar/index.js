// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* MY SOLUTION
function maxChar(str) {
  let dict = {};
  let highOccur = 0;
  let highKey = '';

  for (let char of str) {
    dict[char] ? dict[char] += 1 : dict[char] = 1;
    // below is another way to write the above logic
    // dict[char] = dict[char] + 1 || 1;
  }

  for (let key in dict) {
    if (dict[key] > highOccur) {
      highKey = key;
      highOccur = dict[key];
    } 
  }
  return highKey;
}
*/

// Solution #1

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;  
}


console.log(maxChar("abcccaccd"));
console.log(maxChar("apple 1231111"));

module.exports = maxChar;
