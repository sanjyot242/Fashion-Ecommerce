const express = require('express');
const {
  addProducts,
  getProductsSummaries,
  getProductById,
} = require('../controllers/productController');

const router = express.Router();

router.post('/addProduct', addProducts);
router.get('/getProductsSummaries', getProductsSummaries); // New route for summaries
router.get('/product/:id', getProductById); // New route for details

module.exports = router;
