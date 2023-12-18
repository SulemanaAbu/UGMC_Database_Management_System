// patientsController.js
const Patient = require('../models/patientModel');

const patientsController = {
  // Controller function to register a new patient
  registerPatient: async (req, res) => {
    try {
      const {
        surname,
        othernames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyName,
        emergencyContact,
        relationshipWithPatient,
      } = req.body;

      const patient = new Patient({
        surname,
        othernames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyName,
        emergencyContact,
        relationshipWithPatient,
      });

      const savedPatient = await patient.save();
      res.json(savedPatient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Controller function to get a list of all patients
  getAllPatients: async (req, res) => {
    try {
      const patients = await Patient.find();
      res.json(patients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Controller function to get details of a specific patient
  getPatientDetails: async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id);
      res.json(patient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Other patient-related controller functions can be added here as needed
};

module.exports = patientsController;
