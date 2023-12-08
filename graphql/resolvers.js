const { Phone, User } = require('../model/models');

const resolvers = {
  Query: {
    phones: () => Phone.find(),
    users: () => User.find().populate('phones'),
  },
};

module.exports = resolvers;
