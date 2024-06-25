const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    razorpay_order_id: {
      type: String,
      required: true,
      ref: 'Order',
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
    razorpay_signature: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    captured: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
