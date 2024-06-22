const crypto = require('crypto');

const handleyourAuthorizedLogic = (payload) => {
  console.log(payload);
};

const handleyourCapturedLogic = (payload) => {
  console.log(payload);
};

const handleyourFailedLogic = (payload) => {
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
