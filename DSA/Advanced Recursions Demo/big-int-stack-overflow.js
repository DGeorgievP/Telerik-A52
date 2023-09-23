let howDeep = 0;

function fibMemo(n, cache = new Map([[1, 1n], [2, 1n]]), depth = 1) {
    howDeep = depth;

    if (!cache.has(n)) {
        cache.set(n, fibMemo(n - 1, cache, depth + 1) + fibMemo(n - 2, cache, depth + 1));
    }

    return cache.get(n);
}

try {
    // should not throw
    console.log(fibMemo(5000));

    // will throw, stack size is overloaded with big int (it's big)
    console.log(fibMemo(6000));
} catch (error) {
    console.log(`Depth: ${howDeep}`);
    console.log(error);
}