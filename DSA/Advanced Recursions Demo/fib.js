//@ts-check
// fib(n) = fib(n - 1) + fib(n - 2)
// fib(1) = 1
// fib(2) = 1
// 1, 1, 2, 3, 5, 8...


/**
 * 
 * @param {number} n 
 * @returns {number}
 */
function fib(n) {
    if (n < 3) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

// for (let i = 1; i <= 10; i++) {
//     console.log(`fib(${i}) = ${fib(i)}`);
// }

// console.log(fib(5));

/**
 * 
 * @param {number} n 
 * @param {Map<number, number>} cache 
 * @returns {number}
 */
function fibMemo(n, cache = new Map([[1, 1], [2, 1]])) {
    if (!cache.has(n)) {
        cache.set(n, fibMemo(n - 1, cache) + fibMemo(n - 2, cache));
    }

    //@ts-ignore
    return cache.get(n);
}

console.log(fibMemo(100));