const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const Schema = require('./schema');
const app = express();

const port = 1303;

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true
}))


app.listen(port, () => console.log('App now running on port :'+ port));