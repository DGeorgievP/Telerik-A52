import { deepCompareObjects, formatObject } from './common/utils.js';

/**
 * Creates a deep copy of an object using recursion
 * @param {object} object The object to copy
 * @returns {object} The deep copy
 */
const deepCopy = (object) => {

  if (typeof object !== 'object' || object === null) {
    return object
  }

  let copy = Array.isArray(object) ? [] : {}

  for (let key in object) {
    const value = object[key]
    copy[key] = deepCopy(value)
  }

  return copy
};

// Tests:
const testCases = [
  {
    test: {
      name: 'Pesho',
      age: 16,
      profession: null,
    },
    expected: {
      name: 'Pesho',
      age: 16,
      profession: null,
    },
  },
  {
    test: {
      name: 'Pesho',
      address: {
        street: 'Al Malinov',
        number: 31,
      },
    },
    expected: {
      name: 'Pesho',
      address: {
        street: 'Al Malinov',
        number: 31,
      },
    },
  },
  {
    test: {
      a: {
        b: {
          c: {
            d: {
              e: 42,
            },
          },
        },
      },
    },
    expected: {
      a: {
        b: {
          c: {
            d: {
              e: 42,
            },
          },
        },
      },
    },
  },
  { test: {}, expected: {} },
];

testCases.forEach(({ test, expected }, index) => {
  // arrange & act
  const actual = deepCopy(test);

  // assert
  const result = deepCompareObjects(test, actual);

  const message = result
    ? 'Pass.'
    : `Fail. Expected: ${formatObject(expected)}. Actual: ${formatObject(
      actual
    )}`;

  console.log(`Test ${index + 1}: ${message}`);
});
