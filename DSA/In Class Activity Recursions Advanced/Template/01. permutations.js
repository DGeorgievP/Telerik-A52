import { compareArrays, formatArray } from './common/utils.js';

/**
 * Generates the all possible arrangements of the characters of the passed string
 * @param {string} string The string to generate permutations from
 * @returns {array} The all possible permutations
 */
const permutations = (string) => {
  const solutions = []

  function combo(arr, backtrack = []) {
    if(backtrack.length === arr.length) {
      solutions.push(backtrack.map(i => string[i]).join(''))
      return
    }

    for(let i = 0; i < string.length; i++) {
      if(!backtrack.includes(i)) {
        backtrack.push(i)
        combo(arr, backtrack) 
        backtrack.pop()
      }
    }
  }

  combo(string)
  
  return solutions
  
};

// Tests:
const testCases = [
  { test: 'dsa', expected: ['dsa', 'das', 'sda', 'sad', 'ads', 'asd'] },
  {
    test: 'aAbB',
    expected: [
      'aAbB',
      'aABb',
      'abAB',
      'abBA',
      'aBAb',
      'aBbA',
      'AabB',
      'AaBb',
      'AbaB',
      'AbBa',
      'ABab',
      'ABba',
      'baAB',
      'baBA',
      'bAaB',
      'bABa',
      'bBaA',
      'bBAa',
      'BaAb',
      'BabA',
      'BAab',
      'BAba',
      'BbaA',
      'BbAa',
    ],
  },
  { test: 'aab', expected: ['aab', 'aba', 'aab', 'aba', 'baa', 'baa'] },
  { test: 'a', expected: ['a'] },
  { test: '', expected: [''] },
];

testCases.forEach(({ test, expected }, index) => {
  // arrange & act
  const actual = permutations(test);

  // assert
  const result = compareArrays(expected, actual);

  const message = result
    ? 'Pass.'
    : `Fail. Expected: ${formatArray(expected)}. Actual: ${formatArray(
        actual
      )}`;

  console.log(`Test ${index + 1}: ${message}`);
});
