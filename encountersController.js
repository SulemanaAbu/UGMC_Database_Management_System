// encountersController.js
const Encounter = require('../models/encounterModel');

const encountersController = {
  // Controller function to start an encounter
  startEncounter: async (req, res) => {
    try {
      const { patientId, dateAndTime, encounterType } = req.body;

      const encounter = new Encounter({
        patientId,
        dateAndTime,
        encounterType,
      });

      const savedEncounter = await encounter.save();
      res.json(savedEncounter);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Other encounter-related controller functions can be added here as needed
};

module.exports = encountersController;
