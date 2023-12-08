const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  name: String,
  manufacturer: String,
  price: Number,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Phone' }],
});

const Phone = mongoose.model('Phone', phoneSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Phone, User };
