const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
{
   PatientID:{
        type: Number,
        required:[true, "Enter patient ID"]
   },
   Surname:{
         type: String,
         required:[true, "Enter Surname" ]
   },
   Othernames:{
         type: String,
         required: true,
   },
   Gender:{
         type: String,
         required: true
   },
   PhoneNumber:{
         type: Number,
         required: false
   },
   ResidentialAddress:{
         type: String,
         required: false
   },
   EmergencyName:{
         type: String,
         required:true
   },
   EmergencyContact:{
         type: Number,
         required: true
   },
   RelationshipWithPatient:{
         type: String,
         required: false
   },

   timestamps:{
    timestamps:true
   }
}
)

const Patient = mongoose.model('Patient', patientInfo);
module.exports = Patient;
