// controllers/productController.js
const Product = require('../models/productModel');

const addProducts = async (req, res) => {
  const products = req.body;

  try {
    const newProducts = await Product.insertMany(
      products.map((product) => ({
        ...product,
        created_at: new Date(),
        updated_at: new Date(),
      }))
    );
    res.status(201).json(newProducts);
  } catch (error) {
    res.status(400).json({ message: 'Error adding products', error });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addProducts, getProducts };
