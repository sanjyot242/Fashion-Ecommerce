const express = require('express');
const router = express.Router();
const cartMiddleware = require('../middleware/cartMiddleware');
const { getCart, updateCart } = require('../controllers/cartController');

//fetchCart
router.get('/', cartMiddleware, getCart);

router.post('/update', cartMiddleware, updateCart);

module.exports = router;
