// controllers/productController.js
const Product = require('../models/productModel');

//admin route in future
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

const getProductsSummaries = async (req, res) => {
  try {
    const products = await Product.find(
      {},
      { name: 1, image_url: 1, price: 1 }
    );
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const product = await Product.findById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found', id: id });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addProducts, getProductsSummaries, getProductById };
