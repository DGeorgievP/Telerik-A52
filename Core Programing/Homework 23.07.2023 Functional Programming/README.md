# Functional Programming - In home activity

1. Pure Functions

Implement the pure function `greet` following the specification:

```js
  function greet(name) {
    // write your code here
  }

  /*
  EXPECTED BEHAVIOR:
  console.log(greet("Alex"))
  > Hi, Alex

  console.log(greet("John"))
  > Hi, John

  */
```

2. Higher Order Functions

Higher Order Functions are functions that take other functions as parameters

**forEach**
We are quite familiar with loops in JS, already. Now let's implement our own `forEach`. It should be:
 - pure - no side effects - the array it works on should remain the same
 - HOF - its arguments should be the array and a function that will execute on each of the elements

```js
  const numbers = [1, 2, 3, 4, 5];
  
  const forEach = (array, fn) => {
    // Your code goes here
  }

  /*
    EXPECTED BEHAVIOR:
    forEach(numbers, console.log);
    > 1
      2
      3
      4
      5
    */

```

**Filter**
Filter is a method of arrays. It accepts as argument a test function which should return a boolean, and returns a new array with only the elements for which the test function returned true.

Example:

```js
  function isEven(x){
    return x % 2 === 0;
  }

  const numbers = [12,324,213,4,2,3,45,4234];
  const evenNumbers = numbers.filter(isEven);
  console.log(evenNumbers);
```

As you can see, the function isEven doesn't need to include the logic to handle arrays. This is the great thing about higher order functions: the decision logic is kept separate from the function applying it, so we can reuse it.

We have the following array:

```js
const shoppingCart = [
  {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
  {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
  {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
  {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
]
```

Implement function to get all items from the shopping cart that are type `prime`.

```js
const primeItems = (shoppingCart) => {
  // Your code goes here
}
```

Do not forget that the decision logic is kept separate from the function applying it, so separate it and write function to define whether the items are from category `prime`.

```js
const isPrime = (item) => {
  // Your code goes here
}
```

Now let's implement another function `reject` that is opposite of the `filter`. It will return only items that **DO NOT** satisfy the given condition, i.e. it will `reject` items that satisfy it. It should be:
 - pure - no side effects - the array it works on should remain the same
 - HOF - its arguments should be the array and the predicate function that will outline the condition
 - test it put reusing the `isPrime` function you wrote

```js
const reject = (array, predicate) => {
  // your code goes here
}

/*
  EXPECTED BEHAVIOR:
   console.log(shoppingCart)
    > [
        { name: 'Biscuits', type: 'regular', category: 'food', price: 2 },
        { name: 'Monitor', type: 'prime', category: 'tech', price: 119.99 },
        { name: 'Mouse', type: 'prime', category: 'tech', price: 25.5 },
        { name: 'dress', type: 'regular', category: 'clothes', price: 49.9 }
      ]

    console.log(reject(shoppingCart, isPrime))
    > [
        { name: 'Biscuits', type: 'regular', category: 'food', price: 2 },
        { name: 'dress', type: 'regular', category: 'clothes', price: 49.9 }
      ]

    console.log(shoppingCart)
    > [
        { name: 'Biscuits', type: 'regular', category: 'food', price: 2 },
        { name: 'Monitor', type: 'prime', category: 'tech', price: 119.99 },
        { name: 'Mouse', type: 'prime', category: 'tech', price: 25.5 },
        { name: 'dress', type: 'regular', category: 'clothes', price: 49.9 }
      ]

  */
```


1. 