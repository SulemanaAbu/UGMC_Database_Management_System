// vital.js
const express = require('express');
const router = express.Router();
const vitalController = require('../controllers/vitalController');

// Route to get patient vitals
router.get('/:patientId', vitalController.getVitals);

// Other vital-related routes can be added here as needed

module.exports = router;
