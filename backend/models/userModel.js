const mongoose = require('mongoose');
const Address = require('./addressModel');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Address',
  },
  marketing_accept: { type: Boolean, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
