const razorpayInstance = require('../config/razorPayInstance');
const crypto = require('crypto');
const Order = require('../models/OrderModel');
const Payment = require('../models/paymentModel');
const mongoose = require('mongoose');

const createOrder = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
    };

    const products = req.body.cart.map((item) => ({
      product_id: new mongoose.Types.ObjectId(item._id),
      quantity: item.quantity,
    }));

    const order = await razorpayInstance.orders.create(options);

    await Order.create({
      id: order.id,
      products: products,
      total_price: Number(req.body.amount),
      order_status: 'pending',
    });

    res.status(200).json({ order });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.toString() });
  }
};

const verifyPayment = async (req, res) => {
  console.log(req.body);

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  trusted_order = await Order.findOne({ id: razorpay_order_id });

  if (trusted_order) {
    console.log('found trusted order');
  }

  const body = trusted_order.id + '|' + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');

  const isAuthentic = expectedSignature === razorpay_signature;
  debugger;
  if (isAuthentic) {
    await Payment.findOneAndUpdate(
      { razorpay_payment_id: razorpay_payment_id },
      {
        razorpay_order_id,
        razorpay_signature,
        status: 'Authorized',
      },
      { upsert: true }
    );

    res.redirect(
      `http://localhost:5173/paymentSuccessful/${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

module.exports = { createOrder, verifyPayment };
