const express = require('express');
const router = express.Router();
const services = require('./services');

router.get('/', services.getChannels);
router.delete('/:id', services.deleteChannel);
router.post('/', services.addChannel);
router.get('/itemNews', services.getChannelNews);

module.exports = router;
