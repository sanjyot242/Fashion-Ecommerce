const jwt = require('jsonwebtoken');
const Cart = require('../models/cartModel'); // Assuming you have a Cart model
const crypto = require('crypto'); // For generating session IDs

const cartMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Token After verification' + JSON.stringify(decoded));
      req.user = decoded;
      req.session_id = null; // Clear session_id for authenticated users
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    // No token, use session ID for unauthenticated users
    let sessionId = req.header('Session-ID');
    console.log('received session id is ' + sessionId);
    if (!sessionId) {
      console.log('Session ID not received so creating new Session ');
      // Generate a new session ID if not present
      sessionId = crypto.randomBytes(16).toString('hex');
      res.setHeader('Session-ID', sessionId); // Send session ID to client
    }

    req.user = null; // Clear user for unauthenticated requests
    req.session_id = sessionId;

    // Create or update a session-based cart entry if necessary
    //remove this logic and only cretae this session if added to cart
    try {
      const cart = await Cart.findOne({ session_id: sessionId });

      if (!cart) {
        console.log('cart not found so creating carrt for this session');
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
