const graphql = require('graphql');
const _ =  require('lodash');
const AuthorType = require('./authorType');
const BookType = require('./bookType');
const { books, authors } = require('./data');

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
      args: { id: { type: GraphQLID } },
      resolve (parent, args) {
        // Code here to get data from DB
        const data = _.find(books, {id: args.id});
        return data;
      }
    },
    allBooks: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(BookType))),
      resolve (parent) {
        return books;
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve (parent, args) {

        const data = _.find(authors, {id: args.id});
        return data;
      }
    },
    allAuthors: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(AuthorType))),
      resolve(parent) {
        return authors;
      }
    },
  }
});

module.exports = RootQuery;