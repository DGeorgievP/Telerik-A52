import { compareArrays, formatArray } from './common/utils.js';

/**
 * Sorts an array of numbers in an increasing order recursively by applying the Merge Sort algorithm
 * @param {array} numbers The array of numbers to sort
 * @returns {array} The sorted array
 */
const mergeSort = (numbers) => {

  if(numbers.length < 2) {
    return numbers
  }

  const middle = Math.floor(numbers.length / 2)
  const leftSide = numbers.slice(0, middle)
  const rightSide = numbers.slice(middle)
  return merge(mergeSort(leftSide),  mergeSort(rightSide))
};

function merge(leftSide, rightSide) {
  const result = []

  while(leftSide.length && rightSide.length) {
    if(leftSide[0] < rightSide[0]) {
      result.push(leftSide.shift())
    } else {
      result.push(rightSide.shift())
    }
  }

  return [...result, ...leftSide, ...rightSide]
}

// Tests:
const testCases = [
  { test: [5, 2, 3, 7, 1, 14], expected: [1, 2, 3, 5, 7, 14] },
  { test: [1.3, 5.2, 4.4, 2.4, 7.1], expected: [1.3, 2.4, 4.4, 5.2, 7.1] },
  { test: [1], expected: [1] },
  { test: [], expected: [] },
  { test: [5, 5, 5, 5, 5], expected: [5, 5, 5, 5, 5] },
];

testCases.forEach(({ test, expected }, index) => {
  // arrange & act
  const actual = mergeSort(test);

  // assert
  const result = compareArrays(expected, actual);

  const message = result
    ? 'Pass.'
    : `Fail. Expected: ${formatArray(expected)}. Actual: ${formatArray(
        actual
      )}`;

  console.log(`Test ${index + 1}: ${message}`);
});
