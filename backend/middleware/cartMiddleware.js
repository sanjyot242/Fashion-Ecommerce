const jwt = require('jsonwebtoken');
const Cart = require('../models/cartModel'); // Assuming you have a Cart model
const crypto = require('crypto'); // For generating session IDs

const cartMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      req.session_id = null; // Clear session_id for authenticated users
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    // No token, use session ID for unauthenticated users
    let sessionId = req.header('Session-ID');
    if (!sessionId) {
      console.log('Session ID not received');
      // Generate a new session ID if not present
      sessionId = crypto.randomBytes(16).toString('hex');
      res.setHeader('Session-ID', sessionId); // Send session ID to client
    }

    console.log('Sessionid exists ');

    req.user = null; // Clear user for unauthenticated requests
    req.session_id = sessionId;

    // Create or update a session-based cart entry if necessary
    try {
      const cart = await Cart.findOne({ session_id: sessionId });
      if (!cart) {
        await Cart.create({ session_id: sessionId, items: [] });
      }
      next();
    } catch (error) {
      return res.status(500).json({
        message: 'Error processing session cart',
        error: error.message,
      });
    }
  }
};

module.exports = cartMiddleware;
