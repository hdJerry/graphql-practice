const graphql = require('graphql');
const RootQuery = require('./root');

const {
  GraphQLSchema
} = graphql;


const Schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = Schema;