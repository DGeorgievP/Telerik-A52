//Implement binary search here

// prerequisite - the array should be sorted
const arr = ["Alex", "Anne", "Brian", "Chris", "David", "Elan", "Frank", "James", "Hellen", "Ivan"];

const binarySearch = (array, target, start, end) => {

  if (!array || array.length === 0 || start < 0 || end < 0 || start > array.length || end > array.length) {
    console.log(start, ', ', end)
    return 1
  }

  const middle = Math.floor(((end - start) / 2) + start)
  const tempArr = array.slice()

  if (tempArr[middle] === target) {
    return middle
  }

  if (end < start && tempArr[middle] !== target) {
    return -1
  }

  if (tempArr[middle] < target) {
    return binarySearch(tempArr, target, middle + 1, end)
  }

  if (tempArr[middle] > target) {
    return binarySearch(tempArr, target, start, middle - 1)
  }
}

const target = "Frank";
const index = binarySearch(arr, target, 0, arr.length);

console.log(index > -1 ? `${target} is on index ${index}` : `There is no ${target} in the list`);