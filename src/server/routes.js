const express = require('express');
const API = require('../shared/API.js');
const ReadTicketsController = require('./tickets/ReadTicketsController.js');

const router = express.Router();

router.get(API.tickets, ReadTicketsController);

module.exports = router;