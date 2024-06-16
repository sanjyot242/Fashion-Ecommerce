const Cart = require('../models/cartModel');

const getCart = async (req, res) => {
  const user_id = req.user ? req.user.id : null;
  const session_id = req.session_id;

  console.log('Inside get cart - Session ID:', session_id);
  console.log('User ID:', user_id);

  try {
    let cart;

    if (user_id) {
      cart = await Cart.findOne({ user_id }).populate({
        path: 'items._id',
        model: 'Product',
        select: { name: 1, price: 1, color: 1, image_url: 1 }, // specify the fields you need from Product
      });
    } else if (session_id) {
      cart = await Cart.findOne({ session_id }).populate({
        path: 'items._id',
        model: 'Product',
        select: { name: 1, price: 1, color: 1, image_url: 1 }, // specify the fields you need from Product
      });
    }

    console.log('Cart:', cart);

    if (cart) {
      // Transforming cart items to flatten product details
      const transformedItems = cart.items.map((item) => {
        const product = item._id; // Populated product details
        return {
          _id: product._id,
          quantity: item.quantity,
          brand_id: item.brand_id,
          name: product.name,
          price: product.price,
          color: product.color,
          image_url: product.image_url,
        };
      });

      res.status(200).json({ ...cart.toObject(), items: transformedItems });
    } else {
      res.status(200).json({ items: [] });
    }
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

const removeItemFromCart = async (req, res) => {
  const user_id = req.user ? req.user.id : null;
  const session_id = req.session_id;
  const { product_id } = req.params;

  try {
    let cart;
    if (user_id) {
      cart = await Cart.findOneAndUpdate(
        { user_id },
        { $pull: { items: { _id: product_id } } },
        { new: true }
      );
    } else if (session_id) {
      cart = await Cart.findOneAndUpdate(
        { session_id },
        { $pull: { items: { _id: product_id } } },
        { new: true }
      );
    }

    if (cart) {
      // Optionally, you can repopulate product details if necessary
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const changeQuantity = async (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
};

module.exports = { getCart, updateCart, removeItemFromCart, changeQuantity };
