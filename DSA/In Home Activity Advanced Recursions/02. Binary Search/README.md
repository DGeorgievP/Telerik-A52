<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## DSA - Binary Search

### The problem

We have a list of names that are sorted alphabetically.

| Alex 	| Anne 	| Brian 	| Chris 	| David 	| Elan 	| Frank 	| James 	| Hellen 	| Ivan 	|
|------	|------	|-------	|-------	|-------	|------	|-------	|-------	|--------	|------	|

We want to find if there is a "Frank" in the list and if so, on what index.

The easiest way of doing so is to go through all elements and see if any of them is "Frank". 
> What would be the complexity of this approach? Why?

Yep, this is not the best way to go - what if we need to find Frank among all people in USA or in the World?

### Manual Approach

Now let's consider what would you do if you had to do it manually - you have a **paper phonebook** - yes, this is a book where all citizens of a city are alphabetically sorted and have addresses and home phones:

![](../imgs/phonebook.jpg)

How'd find "Frank" in there?
    1. You open it somewhere a bit close to the beginning or in the middle - Frank should be before Nadya for example. 
    2. You see what names are there - if you got letter that is after "F" - let's say "H" - you go to the left part of the phonebook and open it again. But now you search among names from "A" to "H" - you narrowed your search.
    3. You repeat this until you find "Frank", going through left or right part depending on the letter you've opened.
    4. Finally you get the page with all Franks :)

What to consider:
  1. This approach will work only if the names are **sorted**
  2. On every step we decrease the values we search among, **twice**. 

### Binary Search Explanation

This algorithm is called `binary search` and is recursive by nature. As you image we slowly go to the main task here - its implementation.

Let's formalize it for our list of names from above.

A `binary search` works by comparing the name that we want to find ("Frank") to the name in the middle of the list - either "David" or "Elan". Let’s assume that our code guesses "David" as the middle name. Since "David" comes before "Frank" in the alphabet, then we know that "Frank" cannot be anywhere before "David" in our list.

| ~~Alex~~ 	| ~~Anne~~ 	| ~~Brian~~ 	| ~~Chris~~ 	| ~~David~~ 	| Elan 	| Frank 	| James 	| Hellen 	| Ivan 	|
|------    	|------    	|-------    	|-------    	|-------    	|------	|-------	|-------	|--------	|------	|


Next, we repeat the process (you recognize the recursion, right) using only the second half of our list. Our list now has five names, so the middle name is "James". "James" comes after "Frank", and we eliminate both "Hellen" and "Ivan".

| ~~Alex~~ 	| ~~Anne~~ 	| ~~Brian~~ 	| ~~Chris~~ 	| ~~David~~ 	| Elan 	| Frank 	| ~~James~~ 	| ~~Hellen~~ 	| ~~Ivan~~ 	|
|------     |------    	|-------    	|-------    	|-------    	|------	|-------	|-------    	|-------    	|-------    	|

On our third guess, our binary search will guess "Elan" and eliminate it. The final step finds "Frank".

If the name had not been in the list, our binary search would have reduced the list to one name before determining that the name could not be found.

### Implementation

1. Define function's signature
    1. `array` - the set where we'll be searching
    2. `target` - the element we search for
    3. `start` - the index we start searching from
    4. `end` - the index we stop searching to
      
      The parameters `start` and `end` determine the section of the set that we are examining. These sections get smaller as we eliminate parts of our set.

      ```js
      const binarySearch = (array, target, start, end) => {...}
      ```

2. Let's start with validation of the array's indices - make sure you do not have an empty array and the indices are valid for this array

    ```js
      if (!array
        || array.length === 0
        || start < 0
        || end < 0
        || start > array.length
        || end > array.length) {
        console.log(start, ", ", end);
        return -1;
      }
    ```

3. Find the middle of the set - as indices are whole numbers we need to "choose" the middle element in arrays with even count of elements. Let's use `Math.floor`.
For example, if we have an array with 10 element, this algorithm will choose the 5th element as the middle element:

    ```js
    const middle = Math.floor(((end - start) / 2) + start);
    ```

4.  Copy the array so as not to modify the original:

    ```js
    const tmpArray = array.slice();
    ```

5.  Now we have two base steps:
    1.  We found the element:

      ```js
      if (tmpArray[middle] === target) {
        return middle;
      }
      ```

    2.  We have no more elements to search among:

      ```js
      if (end < start && tmpArray[middle] !== target) {
        return -1;
      }
      ```

6.  And two the recursive steps:
    1.  If the target is bigger than the element at `middle` index - go search on the right - this means from `middle + 1` to `end`

      ```js
      if (tmpArray[middle] < target) {
        return binarySearch(tmpArray, target, middle + 1, end);
      }
      ```

    2.  If the target is smaller than the element at `middle` index - go search on the left - this means from `start` to `middle - 1`

      ```js
      if (tmpArray[middle] > target) {
        return binarySearch(tmpArray, target, start, middle - 1);
      }
      ```
    
7. Test it out:
    ```js
    const target = "Frank";
    const index = binarySearch(arr, target, 0, arr.length);

    console.log(index > -1 ? `${target} is on index ${index}` : `There is no ${target} in the list`);
    ```

### Complexity

Now what is the complexity of this solution? 

We pointed out that the number of elements we search among are decreased by half every time we split the array. So if we have 100 elements on the first step, on the second one we'll have 50, 25 on the third step and at the 7th step we'll know if we found the element. 

This looks like very good complexity - what is it?

**Logarithmic time or O(log n)**

A logarithmic function is the opposite of an exponential function. When you say something grows exponentially, it’s being multiplied. When something grows logarithmically, it is being divided. 

That means that if you have two list items to go through and your program runs in log base 2 of n time, it will take one operation to execute. That’s really powerful! It will take fewer operations to run than you have data.

This is how we ended up with 7 steps to find an element in set of 100 - log base 2 of 100 is approximately 7.

And now consider again the binary search - each step we divide by 2 - so this is why we have complexity O(logn). We skip the "base 2", but we know it is there.

> Now think what would be the complexity of searching an element in **non-sorted** array. Why?

*Hint:* You can divide this task in two steps - sort the array and search among sorted array.

