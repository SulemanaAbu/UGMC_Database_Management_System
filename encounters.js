// encounters.js
const express = require('express');
const router = express.Router();
const encountersController = require('../controllers/encountersController');

// Route to start an encounter
router.post('/start', encountersController.startEncounter);

// Other encounter-related routes can be added here as needed

module.exports = router;
