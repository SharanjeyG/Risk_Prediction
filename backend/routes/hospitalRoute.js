const express = require('express');
const { signUpHospital } = require('../controllers/hospitalController');
const { loginHospital } = require('../controllers/hospitalController');

const router = express.Router();

// Hospital sign-up route
router.post('/signup', signUpHospital);
router.post('/login', loginHospital);

module.exports = router;
