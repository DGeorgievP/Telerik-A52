const add = (a, b) => a + b;
 
// "Memoization" is a technique that allows us to remember (cache) the result of a function when executed with specific arguments.
// The key here is that if we call the function with the same arguments a second time, the result will be taken from the cache instead of being calculated.
const decorateWithCache = func => {
  // Use an object as a storage.
  // Results from the function calls will be stored inside as key-value pairs.
  const cache = {};
 
  const inner = (...args) => {
    const key = args.sort().join(' '); // use as keys sorted arguments 
 
    // if we do not have stored the result of the function with these arguments
    // we will execute it and store the result
    if (!cache[key]) {
      console.log(`-- Caching the result of ${args}`);
 
      cache[key] = func(...args);
    } else {
      console.log(`-- Getting the result of ${args}`);
    }
 
    // if we have result for this key - return it
    return cache[key];
  }
 
  return inner;
};
 
const addWithCache = decorateWithCache(add);
console.log(addWithCache(1, 2));
console.log(addWithCache(1, 2));
 
// Let's try it out!
// We have a "complicated algorithm" that calculates sum of random numbers 
// in 1000 steps. We will improve its performance by skipping calculations
// for numbers that have already been calculated:
 
for (let i = 0; i < 1000; i++) {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  console.log(addWithCache(number1, number2));
}