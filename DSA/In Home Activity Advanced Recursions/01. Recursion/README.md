<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## DSA - Advanced Recursion

### Tasks

1. Find the n-th fibonacci number. We will agree that n starts from 1. 
   
   The Fibonacci sequence: 
   ```
   0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
   ``` 

   It is calculated using the formula:

   ```
   F(n) = F(n-1) + F(n-2)
   ```

   The recursion is pretty obvious:
    1. Base case - numbers 1 and 2

        ```js
        if (n === 1 || n === 2) {
          return 1;
        }
        ```

    2. Recursive step - we calculate n-1-st and n-2-nd fibonacci elements and return their sum

        ```js
        return fibonacci(n - 1) + fibonacci(n - 2);
        ```
    Now again we need to think - working with recursion requires a lot of thinking. Once we understand it we tend to use it everywhere we can. But this is not a cheap operation. Every recursive call comes with its scope and variables and waits for the next calls to be executed. 

    Using the fibonacci task we will optimize our approach to recursive tasks.

    **Memoization**
    Each Fibonacci sequence member can be remembered once it is calculated and the result can be returned directly when needed again. This will decrease the steps we make to calculate the result, hence the time complexity.

    We will use an additional array to "remember" already calculated fibonacci members. 

    So the algorithm goes like this - if you calculated the n-th fibonacci element then the memo array n-th element will have its value. Otherwise calculate it and put it there.

      ```js
      const fibonacciFast = (n, memo) => {
        if (memo[n] === undefined) {
          // base case
          if (n === 1 || n === 2) {
            memo[n] = 1;
          } else {
            // Memoization & recursion step
            memo[n] = fibonacciFast(n - 1, memo) + fibonacciFast(n - 2, memo);
          }
        }

        return memo[n];
      };

      const memo = [];
      console.log(fibonacciFast(8, memo));
      ```

      > Now what we do - we gain time, but we loose space? Yep, you can rarely optimize both time and space complexity. Usually you either sacrifice the one or the other.