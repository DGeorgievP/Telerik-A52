<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# Student Data

## Goal

You are provided with three files with partial student data which is located in the `data` folder. Your task is to combine all the student data and write it in the `data/student-data.json` file as *JSON*.

I.e. a single student record should look like this:

```json
{
  "id": 1,
  "name": "John",
  "city": "Bourgas",
  "grades": [4, 3, 5]
}
```

and the data written to `data/student-data.json` should be a collection of student records formatted as JSON.

You are allowed to use the `fs` library. This is a built-in library, you don't need to install it through **npm**.

```js
import fs from 'fs';
```

You are allowed to use only `fs.readFile` and `fs.writeFile`. Alternatively you might wrap your code in promises, but you are **not allowed** to use synchronous (blocking) code.

Note: Consider that you will be primarily working with callbacks. You will need to read and parse the data from all three files in order to compose the student record collection. Think of what is needed here and how you will approach the problem.
