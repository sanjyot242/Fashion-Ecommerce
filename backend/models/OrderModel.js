const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  order_payment_status: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User',
  },
  products: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: { type: Number, required: true },
    },
  ],
  total_price: { type: Number, required: true },
  order_status: {
    type: String,
    required: true,
    enum: ['pending', 'shipped', 'delivered', 'canceled'],
    default: 'pending',
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
