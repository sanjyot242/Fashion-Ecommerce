const express = require('express');
const { webhookHandler } = require('../controllers/webhookController');
const bodyParser = require('body-parser');
const checkDuplicateEvent = require('../middleware/checkDuplicateEvent');

const router = express.Router();
router.use(bodyParser.json());

router.post('/', checkDuplicateEvent, webhookHandler);

module.exports = router;
