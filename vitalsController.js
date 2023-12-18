// vitalsController.js
const Vitals = require('../models/vitalsModel');

const vitalsController = {
  // Controller function to submit patient vitals
  submitVitals: async (req, res) => {
    try {
      const { patientId, bloodPressure, temperature, pulse, spO2 } = req.body;

      const vitals = new Vitals({
        patientId,
        bloodPressure,
        temperature,
        pulse,
        spO2,
      });

      const savedVitals = await vitals.save();
      res.json(savedVitals);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Other vitals-related controller functions can be added here as needed
};

module.exports = vitalsController;
