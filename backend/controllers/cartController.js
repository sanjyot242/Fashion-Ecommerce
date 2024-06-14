const Cart = require('../models/cartModel');

const getCart = async (req, res) => {
  const user_id = req.user ? req.user.id : null;
  const session_id = req.session_id;

  try {
    const cart = await Cart.findOne({
      $or: [{ user_id }, { session_id }],
    });
    res.status(200).json(cart || { items: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCart = async (req, res) => {
  const user_id = req.user ? req.user.id : null;
  const session_id = req.session_id;
  const { items } = req.body;

  console.log(req.body);

  console.log(user_id);
  console.log(session_id);
  try {
    let cart;
    if (user_id) {
      cart = await Cart.findOneAndUpdate(
        { user_id },
        { items },
        { upsert: true, new: true }
      );
    } else if (session_id) {
      cart = await Cart.findOneAndUpdate(
        { session_id },
        { items },
        { upsert: true, new: true }
      );
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getCart, updateCart };
