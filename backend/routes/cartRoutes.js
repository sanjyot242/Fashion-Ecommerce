const express = require('express');
const router = express.Router();
const cartMiddleware = require('../middleware/cartMiddleware');
const {
  getCart,
  updateCart,
  removeItemFromCart,
  changeQuantity,
} = require('../controllers/cartController');

//fetchCart
router.get('/', cartMiddleware, getCart);

router.post('/update', cartMiddleware, updateCart);
router.delete('/item/:product_id', cartMiddleware, removeItemFromCart);
router.put('/item/:product_id', cartMiddleware, changeQuantity);

module.exports = router;
