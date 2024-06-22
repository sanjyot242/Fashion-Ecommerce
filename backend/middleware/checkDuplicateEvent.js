const processedEventIds = new Set();

const checkDuplicateEvent = (req, res, next) => {
  const eventId = req.headers['x-razorpay-event-id'];

  if (processedEventIds.has(eventId)) {
    // Duplicate event, skip processing
    console.log(`Duplicate event with ID ${eventId}. Skipping processing.`);
    res.status(200).send();
  } else {
    // Not a duplicate, continue with the next middleware or route handler
    processedEventIds.add(eventId);
    next();
  }
};

module.exports = checkDuplicateEvent;
