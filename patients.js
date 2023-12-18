// patients.js
const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/patientsController');

// Route to register a new patient
router.post('/register', patientsController.registerPatient);

// Route to get a list of all patients
router.get('/', patientsController.getAllPatients);

// Route to get details of a specific patient
router.get('/:id', patientsController.getPatientDetails);

// Other patient-related routes can be added here as needed

module.exports = router;
