const express = require('express');
const bodyParser = require('body-parser');
const {
  createOrder,
  verifyPayment,
} = require('../controllers/paymenController');

const router = express.Router();

router.post('/createOrder', createOrder);
router.post(
  '/verifyPayment',
  bodyParser.urlencoded({ extended: true }),
  verifyPayment
);

module.exports = router;
