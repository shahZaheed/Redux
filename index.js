const express = require('express');
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./graphql/schema.js');
const resolvers = require('./graphql/resolvers.js');
const connectDb = require('./Database/dbConnection.js');
const server = new ApolloServer({ typeDefs, resolvers });
const port = 5001
const app = express();
server.listen({ port: port }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
// const { ApolloServer } = require('apollo-server');
// const mongoose = require('mongoose');
// const typeDefs = require('./schema');
// const resolvers = require('./resolvers');
// const mongoDB = 'mongodb://localhost:27017/graphqlDemo';


// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });
