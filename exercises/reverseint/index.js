// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* MY SOLUTION

function reverseInt(n) {
  let intString = n.toString(); // or String(n)

  if (String(n).length === 1) {
    return n
  } else if (Math.sign(n) === -1) { // or intString[0] === '-'
    let revDigArr = intString.substr(1,intString.length - 1).split('').reverse();
    let reversedDigits = revDigArr.filter(digit => digit !== '0').join('');
    return parseInt(intString[0] + reversedDigits, 10);
  } else {
    return parseInt(intString.split('').filter(num => num !== 0).reverse().join(''), 10);
  }

}

*/


// SOLUTION #1

function reverseInt(n) {
  if (n.toString().length === 1) {
    return n;
  } else {
    let reversed = n
      .toString()
      .split('')
      .reverse()
      .join('');
    return parseInt(reversed, 10) * Math.sign(n);
  }
}













console.log(reverseInt(-90)); // -9
console.log(reverseInt(5)); // 5
console.log(reverseInt(500)); // 5
console.log(reverseInt(981)); // 189
console.log(reverseInt(15)); // 51


module.exports = reverseInt;
