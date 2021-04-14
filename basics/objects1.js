let thisBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let thatBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

console.log(`${thisBook.title} by ${thisBook.author}`);

thisBook.title = 'Animal Farm'


let getSummary = (book) => {
    console.log(`${book.title} by ${book.author}`);
}

getSummary(thatBook)