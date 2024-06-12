// models/productModel.js
const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const productSchema = new mongoose.Schema({
  brand_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Brand',
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  size: [sizeSchema],
  color: { type: String, required: true },
  image_url: {
    type: String,
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
