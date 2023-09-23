const greet = (name) => `Hi, ${name}`;

console.log(greet("Alex"));
console.log(greet("John"));

//--------------------------

const numbers = [1, 2, 3, 4, 5]; 

const forEach = (array, fn) => {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    fn(array[index]);
  }
}

forEach(numbers, console.log);

//--------------------------

const shoppingCart = [
  { "name": "Biscuits", "type": "regular", "category": "food", "price": 2.0 },
  { "name": "Monitor", "type": "prime", "category": "tech", "price": 119.99 },
  { "name": "Mouse", "type": "prime", "category": "tech", "price": 25.50 },
  { "name": "dress", "type": "regular", "category": "clothes", "price": 49.90 },
]

const isPrime = (item) => item.hasOwnProperty('type') && item['type'] === 'prime';

const primeItems = (shoppingCart) => shoppingCart.filter(isPrime);

console.log(primeItems(shoppingCart));

console.log(shoppingCart);

const reject = (array, predicate) => {
  const result = [];

  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (!predicate(array[index])) {
      result.push(array[index]);
    }
  }

  return result;
}

console.log(reject(shoppingCart, isPrime))