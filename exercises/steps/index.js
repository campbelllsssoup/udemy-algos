// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* Thought Process:
  
  count from 1 to N, for each number print N #'s && N - count space characters (concatenated).

  better: (Written indented to represent loops)

  From 0 to n (iterate through rows);
    Create an empty string, 'stair' - represents one line
    From 0 to n (iterate through columns)
      If the current colummn === || < current_row
        Add a '#' to 'stair'
      Else
        Add a space to 'stair'
    Console.log(stair)
*/


/* My solution:

function steps(n) {
  let pounds = '#';
  
  for (let i = 1; i < n + 1; i++) {
    let spaces = '';
    let spacesCount = 0;
    while (spacesCount + i < n) {
      spaces += ' ';
      spacesCount++;
    }

    // dynamically create the string of spaces cleaner?? ^^

    console.log(pounds + spaces);
    pounds += '#';
  }
}
*/

/* Iterative solution:

function steps(n) {
  for(let row = 0; row < n; row++){
    let stair = '';
    for(let column = 0; column < n; column++){
      stair += column <= row ? '#' : ' ';
    }
    console.log(stair);
  }
}
*/

// Recursive solution

const steps = (n, row = 0, stair = '') => {
  if (n === row) return;
  
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row+1);
  }

  stair += stair.length <= row ? '#' : ' ';
  steps(n, row, stair)
}

steps(2);

module.exports = steps;
