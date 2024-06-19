const razorpayInstance = require('../config/razorPayInstance');
const crypto = require('crypto');
const createOrder = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
    };
    const order = await razorpayInstance.orders.create(options);
    res.status(200).json({ order });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const verifyPayment = async (req, res) => {
  console.log(req.body);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + '|' + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Will store in DB

    res.status(200).json({ paymentid: razorpay_payment_id });
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

module.exports = { createOrder, verifyPayment };
