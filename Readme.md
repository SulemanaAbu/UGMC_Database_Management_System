# Electronic Medical Record System
#11355543 Sulemana Abubakar Saddique
## Endpoints

1. **Patient Registration**
   - Method: `POST`
   - Endpoint: `/api/patients/register`
   - Request Body:
     ```json
     {
    "PatientID": 11355543,
    "Surname":"Agbo",
    "Othernames":"Tettey-Soli",
    "Gender":"Male",
    "PhoneNumber":245496033,
    "ResidentialAddress":"GD-064-7960",
    "EmergencyName":"Abrokwa",
    "EmergencyContact":35336363636,
    "RelationshipWithPatient":"Brother"
     }
     ```
   - Response: Returns the registered patient details.

2. **Start an Encounter**
   - Method: `POST`
   - Endpoint: `/api/encounters/start`
   - Request Body:
     ```json
     {
       "patientId": "123",
       "dateAndTime": "2023-01-01T12:00:00",
       "encounterType": "Emergency"
     }
     ```
   - Response: Returns the details of the started encounter.

3. **Submit Patient Vitals**
   - Method: `POST`
   - Endpoint: `/api/vitals/submit`
   - Request Body:
     ```json
     {
       "patientId": "123",
       "bloodPressure": "120/80",
       "temperature": "98.6",
       "pulse": "75",
       "spO2": "98"
     }
     ```
   - Response: Returns the submitted vitals data.

4. **View List of Patients**
   - Method: `GET`
   - Endpoint: `/api/patients`
   - Response: Returns a list of all patients.

5. **View Details of a Specific Patient**
   - Method: `GET`
   - Endpoint: `/api/patients/:id`
   - Response: Returns the details of the specified patient.
