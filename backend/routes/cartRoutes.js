const express = require('express');
const router = express.Router();
const cartMiddleware = require('../middleware/cartMiddleware');
const {
  getCart,
  updateCart,
  removeItemFromCart,
} = require('../controllers/cartController');

//fetchCart
router.get('/', cartMiddleware, getCart);

router.post('/update', cartMiddleware, updateCart);
router.delete('/item/:product_id', cartMiddleware, removeItemFromCart);

module.exports = router;
