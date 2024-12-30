const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost/dentist_clinic', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use(bodyParser.json());

// Patient model
const Patient = mongoose.model('Patient', new mongoose.Schema({
    name: String,
    email: String,
    phone: String
}));

// Appointment model
const Appointment = mongoose.model('Appointment', new mongoose.Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    time: Date
}));

// Payment model
const Payment = mongoose.model('Payment', new mongoose.Schema({
    amount: Number,
    method: String,
    date: { type: Date, default: Date.now }
}));

// Routes

// Register patient
app.post('/api/patient/register', async (req, res) => {
    const { name, email, phone } = req.body;
    const patient = new Patient({ name, email, phone });
    await patient.save();
    res.json({ message: 'Patient registered successfully!' });
});

// Schedule appointment
app.post('/api/appointment/schedule', async (req, res) => {
    const { patientId, appointmentTime } = req.body;
    const appointment = new Appointment({
        patientId,
        time: new Date(appointmentTime)
    });
    await appointment.save();
    res.json({ message: 'Appointment scheduled successfully!' });
});

// Process payment
app.post('/api/payment/submit', async (req, res) => {
    const { amount, method } = req.body;
    const payment = new Payment({ amount, method });
    await payment.save();
    res.json({ message: 'Payment processed successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
