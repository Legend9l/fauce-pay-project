const express = require('express');
const router = express.Router();
const FaucetController = require('../controllers/faucetController');

const faucetController = new FaucetController();

router.post('/claim', faucetController.claim);

module.exports = router;