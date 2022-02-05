const books = [
  {
    id: '1',
    name: 'Leonel Messi The GOAT',
    genre: 'Soccer',
    authorid: '2'
  },
  {
    id: '2',
    name: 'Ronaldinho Documentary',
    genre: 'Soccer',
    authorid: '1'
  },
  {
    id: '3',
    name: 'The Perfect Chaos- Neymar Jn',
    genre: 'Soccer',
    authorid: '3'
  },
];

const authors = [
  {
    id: '1',
    name: 'Mark Tortoise',
    age: 22
  },
  {
    id: '2',
    name: 'John Prawn',
    age: 44
  },
  {
    id: '3',
    name: 'Gerry Indiana',
    age: 366
  },
];

const db = {
  url: 'mongodb+srv://testing:test123@graphql-practice.7aihf.mongodb.net/graphql-practice?retryWrites=true&w=majority'
}

module.exports = {
  books,
  authors,
  db
}