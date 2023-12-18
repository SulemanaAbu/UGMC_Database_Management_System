const express = require('express')
const app = express()
const mongoose = require ('mongoose')


app.use(express.json())

app.get('/', function (req, res) {
  res.send('Universty of Ghana Medical Centre Database Management System')
})

app.get('/ok', function (req, res) {
    res.send('Please be kind')
  })

app.post('/patient',  async(req, res)=> {
    try {
        const patient = await patient.create (req.body)
        res.status(200).json(patient)
        
    } catch (error) {
        console.log(error.message);
        res.status(200).json({message: error.message})
    }
    console.log(req.body);
    res.send(req.body);
})


mongoose.connect('mongodb+srv://SulemanaAbu:Bb0273200754$@cluster0.s8g2yjh.mongodb.net/UGMC=API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log('Node API running successfully')
    })
   
}).catch(() => {
console.log(error)
})