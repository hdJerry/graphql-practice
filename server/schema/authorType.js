const graphql = require('graphql');
const _ = require('lodash');
// const BookType = require('./bookType');
const { books } = require('./data');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} = graphql;


const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(require('./bookType')))),
      resolve: async(parent) => {
        const data = await _.filter(books, { authorid: parent.id});
        return data;
      }
    }
  })
});
module.exports = AuthorType;