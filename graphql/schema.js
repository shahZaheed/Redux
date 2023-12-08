const { gql } = require('apollo-server');

const typeDefs = gql`
  type Phone {
    id: ID!
    name: String
    manufacturer: String
    price: Float
  }

  type User {
    id: ID!
    name: String
    email: String
    phones: [Phone]
  }

  type Query {
    phones: [Phone]
    users: [User]
  }
`;

module.exports = typeDefs;
