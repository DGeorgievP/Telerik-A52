<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## DSA - Recursion

### Definition

**Recursion** is method that calls itself until it doesn't.

Recursion musts:
  1. The function must call itself​
     1. It could happen directly or indirectly through other methods​
  2. Recursion must have an exit criteria ​
     1. a.k.a. bottom that prevents infinite recursion​
 ​

> Do you remember what is **infinite loop**?

> What is **infinite recursion**? What causes infinite recursion?


> Did you run into an infinite recursion?

The JavaScript exception "too much recursion" or "Maximum call stack size exceeded" occurs when there are too many function calls, or a function is missing a base case.

  **Message**
  ```
  Error: Out of stack space (Edge)
  InternalError: too much recursion (Firefox)
  RangeError: Maximum call stack size exceeded (Chrome)
  ```

**Always make sure you have the correct base case, i.e. recursion bottom!**

### Rules

**Use** recursion for combinatorial algorithm where at each step you need to recursively explore more than one possible continuation​

**Avoid** recursion when a simple iterative algorithm exists. Also when the recursive function input is unknown (for example depends on user data) and possibly large enough to use a lot of stack space (cause stack overflow exception)​

### Tasks

1. String Reverse​
   **Input:** "Telerik"
   **Output:** "kireleT"

   1. If the string is empty or with only one letter - return the string itself. This is our **base case**
   
      ```js
      if (string.length <= 1) {
        return string;
      }
      ```

   2. Take the first character and the rest of the string
   
      ```js
      const first = string[0];
      const rest = string.slice(1);
      ```

   3. Reverse the remaining substring​ - this is the **recursive step** and prepend it with the first character

      ```js
      return reverse(rest) + first;
      ```

      > Can you explain how the string is being reversed step by step? Try to write down and see how exactly the recursion is being executed. Remember that every function that makes a recursive call waits for that call to be executed and then continues its own execution.

2. Using recursion write two functions - one that prints numbers from `start` to `end` and another that prints them backwards - from `end` to `start`
   
   Here there is one major thing to pay attention to - every function that makes a recursive call waits for that call to be executed and then continues its own execution. This way it does matter where we put our method's logic:
    1. **Up the stack** - what happens before a recursive call​
   
        ```js
        const recursiveLoopUp = (start, end) => {
          if (start === end) {
            return;
          }

          console.log(start); // executes before the recursive step
          recursiveLoopUp(start + 1, end);
        };
        ```

    2. **Down the stack** - what happens after a recursive call​
        
        ```js
        const recursiveLoopDown = (start, end) => {
          if (start === end) {
            return;
          }

          recursiveLoopDown(start + 1, end);
          console.log(start); // executes after the recursion step. This means that the console.log of the first call will execute last.
        };
        ```
    
    3. Now test it and see the difference. Try again to write down how the recursion is executed in each case.

        ```js
        recursiveLoopUp(0, 5); // print in increasing order
        recursiveLoopDown(0, 5); // print in decreasing order
        ```

### Tasks to solve by yourself

We have the following json object that represents a directory structure. We will use ot to solve some common tasks related to traversing directories.

> Research how to use actual directories in your node project.

   ```json
      const hardDisk = {
      "name": "C:",
      "type": "directory",
      "content":
        [
          {
            "name": "Images",
            "type": "directory",
            "content": [
              {
                "name": "img1.png",
                "type": "file",
                "content": null
              },
              {
                "name": "img2.png",
                "type": "file",
                "content": null
              },
              {
                "name": "Album 1",
                "type": "directory",
                "content": [
                  {
                    "name": "img3.png",
                    "type": "file",
                    "content": null
                  },
                  {
                    "name": "img4.png",
                    "type": "file",
                    "content": null
                  },
                  {
                    "name": "Album 1.1",
                    "type": "directory",
                    "content": [
                      {
                        "name": "img5.png",
                        "type": "file",
                        "content": null
                      },
                      {
                        "name": "img6.png",
                        "type": "file",
                        "content": null
                      },
                    ]
                  }
                ]
              },
              {
                "name": "Album 2",
                "type": "directory",
                "content": [
                  {
                    "name": "img7.png",
                    "type": "file",
                    "content": null
                  },
                ]
              }
            ]
          }
        ]
    }
   ```

3. Directory Traversal
   
   Write a recursive method 
   ```js
   const traverseDirectories = (pathObj) => {}
   ```

   which prints the names of all items in the given `pathObj`.

   **Example Usage**
   ```js
    traverseDirectories(hardDisk.content[0]);
   ```

   **Possible Output**
   ```
    Images:
      img1.jpg
      img2.jpg
      Album 1:
        img3.png
        img4.jpg
        Album 1.1
          img5.jpg
          img6.png
      Album 2:
        img7.jpg
   ```

4. File Exists

    Write a recursive method 
   ```js
   const fileExists = (pathObj, name) => {}
   ```
    
    which returns if a file with the given name exists in the given path. Remember, it could be in some subfolder.

    **Example usage**  

    ```js
    const exists = fileExists(hardDisk, "img5.png");
    console.log(exists);
    ```

    **Possible output:**

    ```
    true
    ```

5. Directory Stats

    Write a recursive method 
   ```js
   const getDirectoryStats = (pathObj) => {}
   ```
   
    which returns the number of files for each file extension.

    **Example usage**  

    ```js
    const stats = getDirectoryStats(hardDisk);
    console.log(stats);
    ```

    **Possible output:**

    ```
    { 'png' => 7 }
    ```

    > What **data structure** is the most appropriate to keep the stats data? Why?

    > Add more folders and files with different extensions and test your method.

### Conclusion

Recursion is powerful technique to solve complex problems. Many algorithms lay on it. Still, we need to be careful as it is resourceful.

When solving tasks that require building an algorithm do not rush into finding the perfect solution. Try to find *any* solution and them think over its time and space complexity. Iterate (yep) through possible optimisations. See what's your trade offs and whether they are worthy.

No one will expect you to know the right solution in matter of minutes - they want to see that you can think, review different ways and understand when and why one is better than the other.

