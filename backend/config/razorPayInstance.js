// Import required modules
const Razorpay = require('razorpay');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create and export the Razorpay instance
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

module.exports = razorpayInstance;
