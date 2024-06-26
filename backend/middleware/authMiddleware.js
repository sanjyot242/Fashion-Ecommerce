const jwt = require('jsonwebtoken');
const Cart = require('../models/cartModel'); // Assuming you have a Cart model
const crypto = require('crypto'); // For generating session IDs

//Will have to seperatee middleware for auth and seperate middle ware for Cart

// middleware/authMiddleware.js

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
