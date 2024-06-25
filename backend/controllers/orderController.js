const Order = require('../models/OrderModel');

const getOrder = async (req, res) => {
  const { orderId } = req.params;
  console.log(orderId);

  try {
    const order = await Order.findOne({ id: orderId }).populate({
      path: 'products.product_id',
      model: 'Product',
      select: { name: 1, price: 1, color: 1, image_url: 1 }, // specify the fields you need from Product
    });
    console.log(order);
    res.status(200).json({ order });
  } catch (error) {
    res.status(400).json({ message: error.toString() });
  }
};

module.exports = { getOrder };
