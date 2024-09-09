const express = require('express');
const { addDoctor } = require('../controllers/doctorController');

const router = express.Router();

// Add doctor route
router.post('/add-doctor', addDoctor);

module.exports = router;
