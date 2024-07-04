const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: false },
  street: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  postal_code: { type: String, required: false },
  phone: { type: String, required: false },
  country: { type: String, required: false },
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
