const fibonacciFast = (n, memo) => {
  if (memo[n] === undefined) {
    if (n === 1 || n === 2) {
      memo[n] = 1
    } else {
      memo[n] = fibonacciFast(n - 1, memo) + fibonacciFast(n - 2, memo)
    }

  }

  return memo[n]
};

const memo = [];
console.log(fibonacciFast(8, memo));
