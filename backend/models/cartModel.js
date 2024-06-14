const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  quantity: { type: Number, required: true, default: 1 },
  brand_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, ref: 'User', required: false }, // Nullable for session-based carts
  session_id: { type: String, required: false }, // Nullable for user-based carts
  items: [cartItemSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
