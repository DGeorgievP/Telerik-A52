import {books} from "./book-data.js";

const booksbyGenre = (books, genre) => {
    const genreFilter = books.filter((books) => books.genre === genre)
    return genreFilter
}
const booksGenre = booksbyGenre(books, 1)
console.log(booksGenre)