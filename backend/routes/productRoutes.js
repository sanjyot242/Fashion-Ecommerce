const express = require('express');
const {
  addProducts,
  getProducts,
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/addProduct', addProducts);
router.get('/getProducts', getProducts);

module.exports = router;
