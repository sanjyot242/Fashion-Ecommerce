const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');
const authMiddleware = require('../middleware/authMiddleware');
const { getCart, updateCart } = require('../controllers/cartController');

//fetchCart
router.get('/', authMiddleware, getCart);

router.post('/update', authMiddleware, updateCart);

module.exports = router;
