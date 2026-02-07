const express = require("express");
const pairingController = require("../controllers/pairing-controller.js")

// Create a router instance
const router = express.Router();

// GET endpoints
router.get('/pairing', pairingController.getWinePairing);

// Export router so app.js can use it
module.exports = router;

