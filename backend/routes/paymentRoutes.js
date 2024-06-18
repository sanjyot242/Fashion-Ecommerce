const express = require('express');

const { createOrder } = require('../controllers/paymenController');

const router = express.router();

router.post('/createOrder', createOrder);

module.exports = router;
