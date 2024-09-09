const express = require('express');
const { addPatient } = require('../controllers/patientController');

const router = express.Router();

// Add patient route
router.post('/add-patient', addPatient);

module.exports = router;
