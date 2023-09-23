//@ts-check
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // n / 2, n / 2 / 2

// 1000 -> 10
// 1_000_000 -> 20

/**
 * 
 * @param {number[]} arr 
 * @param {number} value 
 * @param {number} left 
 * @param {number} right 
 * @returns {boolean}
 */
function bsearch(arr = [], value, left = 0, right = arr.length - 1) {
    if (left > right) {
        return false;
    }

    const mid = Math.floor((left + right) / 2);

    if (mid === value) {
        return true;
    }

    if (mid < value) {
        return bsearch(arr, value, mid + 1, right);
    }

    return bsearch(arr, value, left, mid - 1);
}

console.log(bsearch(arr, 10));