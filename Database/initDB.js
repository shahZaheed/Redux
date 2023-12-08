const mongoose = require('mongoose');
const { Phone, User } = require('./models');
//**************** how to run the initDB.js file for inserting the data into the mongodb local host -- node initDB.js **********/
// MongoDB Connection String
//use graphqlDemo
// db.users.insertMany([{ name: 'Alice', email: 'alice@example.com' }, { name: 'Bob', email: 'bob@example.com' }]);
// db.phones.insertMany([{ name: 'Phone A', manufacturer: 'Company A', price: 299 }, { name: 'Phone B', manufacturer: 'Company B', price: 399 }]);
const mongoDB = 'YOUR_MONGODB_CONNECTION_STRING';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const defaultPhones = [
  { name: 'Phone A', manufacturer: 'Company A', price: 299 },
  { name: 'Phone B', manufacturer: 'Company B', price: 399 },
];

const defaultUsers = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
];

async function insertDefaultData() {
  try {
    await Phone.deleteMany({});
    await User.deleteMany({});

    const insertedPhones = await Phone.insertMany(defaultPhones);
    defaultUsers[0].phones = [insertedPhones[0]._id];
    defaultUsers[1].phones = [insertedPhones[1]._id];

    await User.insertMany(defaultUsers);

    console.log('Default data inserted successfully');
    db.close();
  } catch (error) {
    console.error('Error inserting default data:', error);
    db.close();
  }
}

insertDefaultData();
