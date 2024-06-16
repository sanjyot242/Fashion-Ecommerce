const Cart = require('../models/cartModel');

const getCart = async (req, res) => {
  const user_id = req.user ? req.user.id : null;
  const session_id = req.session_id;

  console.log('Inside get cart - Session ID:', session_id);
  console.log('User ID:', user_id);

  try {
    let cart;

    if (user_id) {
      cart = await Cart.findOne({ user_id });
    } else if (session_id) {
      cart = await Cart.findOne({ session_id });
    }

    console.log('Cart:', cart);

    res.status(200).json(cart || { items: [] });
  } catch (error) {
    console.error('Error fetching cart:', error.message);
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
