const Patient = require('../models/Patient');
const Hospital = require('../models/Hospital');
const { sendCredentials } = require('../utils/email');

const addPatient = async (req, res) => {
  const { hospitalId, name, age, email } = req.body;

  try {
    const patient = new Patient({ name, age, email, hospitalId });
    await patient.save();

    // Update hospital document with new patient
    await Hospital.findByIdAndUpdate(hospitalId, { $push: { patients: patient._id } });

    // Generate credentials (in this example, loginId = email)
    const loginId = email;
    const password = 'your_generated_password'; // Generate a strong password here

    // Send login credentials via email
    await sendCredentials(email, loginId, password);

    res.status(201).json({ message: 'Patient added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  addPatient
};
