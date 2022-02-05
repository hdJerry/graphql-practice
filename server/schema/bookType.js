const graphql = require('graphql');
const _ = require('lodash');
const AuthorType = require('./authorType');
// const { authors } = require('./data');
const Author = require('../models/author');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () =>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    authorid: { type: GraphQLID },
    author: {
      type: AuthorType,
      resolve: async (parent, args) => {
        const data = await Author.findById({
          _id: parent.authorid
        });
        return data;
      }
    }
  })
});

module.exports = BookType;