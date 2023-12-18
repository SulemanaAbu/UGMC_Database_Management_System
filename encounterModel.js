// encounterModel.js
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  dateAndTime: {
    type: Date,
    default: Date.now,
  },
  encounterType: {
    type: String,
    enum: ['Emergency', 'OPD', 'Specialist Care'],
    required: true,
  },
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;
