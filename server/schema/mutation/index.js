const graphql = require('graphql');
// const _ =  require('lodash');
const BookType = require('../bookType');
const AuthorType = require('../authorType');
// const { books, authors } = require('./data');
const Book = require('../../models/book');
const Author = require('../../models/author');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = graphql;

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve: async (parent, args) => {
        const { name, age } = args;
        let data = new Author({
          name,
          age
        });
        data = await data.save();
        return data;
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorid: { type: GraphQLID }
      },
      resolve: async (parent, args) => {
        const { name, genre, authorid } = args;
        let data = new Book({
          name,
          genre,
          authorid
        });
        data = data.save();
        return data;
      }
    }
  }
});

module.exports = Mutation;