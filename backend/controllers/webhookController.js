const crypto = require('crypto');
const Payment = require('../models/paymentModel');
const Order = require('../models/OrderModel');

const handleyourAuthorizedLogic = async (payload) => {
  const { id, status, order_id } = payload.payment.entity;
  console.log(id);
  const update = {
    razorpay_order_id: order_id,
    status: status,
  };
  try {
    const record = await Payment.findOneAndUpdate(
      { razorpay_payment_id: id },
      update,
      { upsert: true }
    );
    console.log(record);
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

const handleyourCapturedLogic = async (payload) => {
  console.log('In captured logic');
  const { id, status, order_id, captured } = payload.payment.entity;
  const update = {
    razorpay_order_id: order_id,
    status: status,
    captured: captured,
  };
  try {
    await Payment.findOneAndUpdate({ razorpay_payment_id: id }, update, {
      upsert: true,
    });
    await Order.findOneAndUpdate(
      { id: order_id },
      {
        payment_status: 'Paid',
      }
    );
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

const handleyourFailedLogic = (payload) => {
  //payment failed
  console.log(payload);
};

async function validateWebhookSignature(payload, signature, secret) {
  // Generate a hash using the HMAC SHA256 algorithm
  const generatedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');

  // Compare the generated signature with the one from Razorpay
  return generatedSignature === signature;
}

const webhookHandler = async (req, res) => {
  console.log(req.body);

  const signature = req.headers['x-razorpay-signature'];
  const isValid = await validateWebhookSignature(
    JSON.stringify(req.body),
    signature,
    process.env.RAZORPAY_WEBHOOK_SECRET
  );
  if (isValid) {
    const { event, payload } = req.body;

    switch (event) {
      case 'payment.authorized':
        await handleyourAuthorizedLogic(payload);
        break;
      case 'payment.captured':
        await handleyourCapturedLogic(payload);
        break;
      case 'payment.failed':
        await handleyourFailedLogic(payload);
        break;
      default:
        console.log(`Unhandled event: ${event}`);
        break;
    }
  }
  res.status(200).send();
};

module.exports = { webhookHandler };
