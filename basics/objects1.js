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

//  temp conversions:
let f = 50
let c = (f - 32) * 5/94
let k = (f + 59.67) * 5/9

// function to take f and return object with all 3 

let convert = (degF) => {
    return {
        f: degF,
        c: (f - 32) * 5/9,
        k: (f + 59.67) * 5/9
    }
}
console.log(convert(64));