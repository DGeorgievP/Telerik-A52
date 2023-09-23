// Function spy
export default function (data /* always a function */) {
  // your code starts here
  const cache = {};
  // missing implementation
  return (param) => {
    // missing implementation
    if (cache.hasOwnProperty(param)) {
      cache[param].calls++
    } else {
      const result = data(param)
      cache[param] = { value: result, calls: 1}
    }
    return cache[param];
  };
  // your code ends here
}