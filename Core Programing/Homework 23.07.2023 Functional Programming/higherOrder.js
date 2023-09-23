const numbers = [1, 2, 3, 4, 5];

const forEach = (array, fn) => {
  const newArr = []
  for (let i = 0; i < array.length; i++) {
    fn(newArr.push(i));
  }
};

//EXPECTED BEHAVIOR:
forEach(numbers, console.log);
//  1
//  2
//  3
//  4
//  5
