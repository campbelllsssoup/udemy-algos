// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* for loop w/ array
function reverse(str) {
  let strArray = str.split('');
  let newArray = []; 

  for(let i=strArray.length; i >= 0; i--){
    newArray.push(strArray[i]);
  }
  
  let solution = newArray.join('');

  return solution; 
}
*/

/*
function reverse(str){

  let strArray = str.split('');
  strArray = strArray.reverse();
  let solution = strArray.join('');
  console.log(solution);
  return solution;

}
*/


/* one-liner using method-chaining


function reverse(str){
  return str
    .split('')
    .reverse()
    .join('');
}
*/

/* for-of syntax

function reverse(str){
  let reversed = '';

  for (let char of str){
    reversed = char + reversed;
  }

  return reversed;
}
*/

function reverse(str){
  return str.split('').reduce((rev, char) => rev = char + rev, '');
}


console.log(reverse('abc'));

module.exports = reverse;
