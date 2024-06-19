const razorpayInstance = require('../config/razorPayInstance');

const createOrder = async (req, res) => {
  console.log(req.body);
  try {
    console.log(razorpayInstance);

    const options = {
      amount: Number(req.body.amount * 100),
    };
    const order = await razorpayInstance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = { createOrder };
