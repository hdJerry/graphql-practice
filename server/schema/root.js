const graphql = require('graphql');
// const _ =  require('lodash');
const BookType = require('./bookType');
const AuthorType = require('./authorType');
// const { books, authors } = require('./data');
const Book = require('../models/book');
const Author = require('../models/author');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID }},
      resolve: async (parent, args) => {
        // Code here to get data from DB
        const data = await Book.findById({
          _id: args.id
        });
        return data;
      }
    },
    allBooks: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(BookType))),
      resolve (parent) {
        return Book.find();
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve: async (parent, args) => {
        const data = await Author.findById({
          _id: args.id
        });
        return data;
      }
    },
    allAuthors: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(AuthorType))),
      resolve(parent) {
        return Author.find();
      }
    },
  }
});

module.exports = RootQuery;