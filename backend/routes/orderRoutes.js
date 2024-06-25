const express = require('express');
const router = express.Router();

const { getOrder } = require('../controllers/orderController');

//fetchCart
router.get('/order/:orderId', getOrder);

module.exports = router;
