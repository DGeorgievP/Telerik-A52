import {books} from "./book-data.js";

const pagesInRange = (books, min, max) => {
  const minMax = books.filter((books) => books.pages >= min && books.pages <= max);
  return minMax;
};
const booksWithinRange = pagesInRange(books, 499, 500);
console.log(booksWithinRange)

